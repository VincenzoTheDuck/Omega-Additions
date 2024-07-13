const additionBoltHit = new Effect(12, e => {
	Draw.color(Pal.lancerLaser);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6 + 1);
	}});

  Angles.randLenVectors(e.id, 4, e.finpow() * 28.0, e.rotation, 360.0, hj);
});

const additionBoltDespawn = new Effect(12, e => {
	Draw.color(Pal.lancerLaser);
	Lines.stroke(e.fout() * 3)
	
	Fill.circle(e.x, e.y, e.fout() * 2.5);
	
	Lines.circle(e.x, e.y, e.fin() * 14);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6 + 1);
	}});

  Angles.randLenVectors(e.id, 13, e.finpow() * 20.0, e.rotation, 360.0, hj);
});

const additionBoltTrail = new Effect(80, e => {
	Draw.color(Pal.lancerLaser);
	
	Fill.circle(e.x, e.y, e.fout() * 4.5);
});

const additionBolt = extend(BasicBulletType, {
	damage: 55,
  healingPercent: 1.5,
  collidesTeam: true,
  collidesAir: false,
	speed: 8,
	lifetime: 40,
	hitEffect: additionBoltHit,
  despawnEffect: additionBoltDespawn,
	trailEffect: additionBoltTrail,
	trailInterval: 2,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Pal.lancerLaser);
		Fill.circle(b.x, b.y, 2.5);
		Draw.reset();
	}
});

const additionChargeHit = new Effect(25, e => {
	Draw.color(Pal.lancerLaser);
	Lines.stroke(e.fout() * 3)
	
	Fill.circle(e.x, e.y, e.fout() * 4.5);
	
	Lines.circle(e.x, e.y, e.fin() * 55);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6 + 1);
	}});

  Angles.randLenVectors(e.id, 13, e.finpow() * 48.0, e.rotation, 360.0, hj);
});

const additionChargeTrail = new Effect(80, e => {
	Draw.color(Pal.lancerLaser);
	
	Fill.circle(e.x, e.y, e.fout() * 4.5);
});

const additionCharge = extend(ArtilleryBulletType, {
	splashDamage: 120,
  splashDamageRadius: 55,
  healingPercent: 6,
  collidesTeam: true,
	speed: 5,
	lifetime: 64,
	hitEffect: additionBoltHit,
  despawnEffect: additionBoltDespawn,
	trailEffect: additionBoltTrail,
	trailInterval: 2,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Pal.lancerLaser);
		Fill.circle(b.x, b.y, 5.5);
		Draw.reset();
	}
});

const addition = extend(PowerTurret, "addition", {
  setStats(){
        this.super$setStats();
        this.stats.add(Stat.ammo, StatValues.ammo(ObjectMap.of(this, additionShell)));
    }
});
});
addition.range = 320;
addition.shootType = additionBolt;
addition.shoot = new ShootAlternate(){{
  spread: 3.8,
  shots: 4,
  barrels: 4
}};
addition.targetAir: false;
addition.targetHealing: true;
addition.buildType = () => extend(PowerTurret.PowerTurretBuild, addition, {
	creload : 0,
    updateTile(){
        this.super$updateTile();

        if(this.isShooting() && this.isActive() && this.hasAmmo() && this.creload >= 120){
            this.creload = 0
            additionShell.create(this, this.team, this.x, this.y, this.rotation)
            Sounds.artillery.at(this)
            Fx.shootBigColor.at(this.x, this.y)
        }
        else{
            if(this.creload < 160){this.creload += 1} 
        }
    },
});
