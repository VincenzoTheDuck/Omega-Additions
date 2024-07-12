const stats = require("libs/stats");

const shockShoot = new Effect(17, e => {
	color(Color.white, Pal.surge, e.fout());
  stroke(e.fout() * 1.5);

  randLenVectors(e.id, 5, e.finpow() * 12, (x, y) -> {
      float ang = Mathf.angle(x, y);
      lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
  });
});

const shockBullet = extend(LightningBulletType, {
  lightningLength: 33,
	damage: 24,
  lightningColor: Pal.surge,
  collidesAir: false
});

const shock = extend(PowerTurret, "shock", {
  setStats(){
        this.super$setStats();
    this.stats.remove(Stat.inaccuracy);
        this.stats.remove(Stat.ammo);
        this.super$setStats();
		this.stats.remove(Stat.reload);
		this.stats.add(stats.maxShootChancePercent, this.maxA * 100, stats.percent);
    },
    load() {
      this.region = Core.atlas.find(this.name);
    this.baseRegion = Core.atlas.find("block-" + this.size);
   this.spinnerRegion = Core.atlas.find(this.name + "-spinner");
          this.super$load()
		this.maxA = 0.5
	}
});
shock.buildType = () => extend(PowerTurret.PowerTurretBuild, shock, {
	updateTile(){
        this.super$updateTile();

    shock.a = Mathf.clamp(this.shootWarmup, 0, shock.maxA)

        if(this.isShooting() && this.isActive() && this.hasAmmo() && Mathf.chance(this.a)){
            shockBullet.create(this, this.team, this.x, this.y, this.rotation)
            Sounds.spark.at(this)
            shockShoot.at(this.x, this.y)
        }
    }
});
shock.targetAir: false;
shock.shootWarmupSpeed = 0.025;
shock.range = 120;
shock.rotateSpeed = 0;
shock.shootCone = 360;
shock.shootEffect: Fx.none,
shock.smokeEffect: Fx.none,
shock.shootType = extend(BulletType, {
  damage: 0,
  lifetime: 1,
  despawnEffect: Fx.none,
  hitEffect: Fx.none,
  collides: false,
  draw(b){
		Draw.reset();
	}
});
