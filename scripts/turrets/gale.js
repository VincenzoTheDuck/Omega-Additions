const galeShock = new Effect(17, e => {
	Draw.color(Color.valueOf("ff7272").shiftHue(Time.time));
	Lines.stroke(e.fout() * 3.5)
	
	Lines.circle(e.x, e.y, e.fin() * 12);
});

const galeSpark = new Effect(35, e => {
	Draw.color(Color.valueOf("ff7272").shiftHue(Time.time));
	Lines.stroke(e.fout() * 3)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 25);
	}});

  Angles.randLenVectors(e.id, 19, e.finpow() * 14.0, e.rotation, 360.0, hj);
});

const galeSmoke = new Effect(100, 300, e => {
	Draw.color(Color.valueOf("ff7272").shiftHue(Time.time));

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 3.5;
    
      Fill.poly(e.x + x, e.y + y, 4, rad, 0);
	}});
  
  Angles.randLenVectors(e.id, 8, e.fin(Interp.pow10Out) * 25.0, 0, 180.0, hl);
});

const galeTrail = new Effect(60, e => {
	Draw.color(Color.valueOf("ff7272").shiftHue(Time.time));
	
	Fill.poly(e.x + x, e.y + y, 3, e.fout(Interp.pow5Out), 45);
});

const galeBullet = extend(BasicBulletType, {
  damage: 300,
  pierce: true,
	speed: 6,
	lifetime: 30,
	despawnEffect: new MultiEffect(galeShock, galeSpark, galeSmoke),
  hitEffect: galeSpark,
	trailEffect: galeTrail,
	trailInterval: 3,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Color.valueOf("ff7272").shiftHue(Time.time));
		Drawf.tri(e.x, e.y, 3, 5, b.rotation);
    Drawf.tri(e.x, e.y, 3, 5, b.rotation + 180);
		Draw.reset();
	}
});

const gale = extend(PowerTurret, "gale", {
  	load() {
          	this.super$load()
	  	this.region = Core.atlas.find(this.name);
          	this.rainbowRegion = Core.atlas.find(this.name + "-rainbow");
      this.heatRegion = Core.atlas.find(this.name + "-heat");
	  	this.baseRegion = Core.atlas.find("block-" + this.size)
  	}
});
gale.heatColor = Color.valueOf("ff9a76"),
gale.buildType = () => extend(PowerTurret.PowerTurretBuild, gale,  {
  draw() {
	  Draw.rect(gale.baseRegion, this.x, this.y, 0);
	  Draw.rect(gale.region, this.x, this.y, this.rotation - 90);
    Draw.blend(Blending.additive())
	  Draw.color(Color.valueOf("ff7272").shiftHue(Time.time).alpha(this.shootWarmup));
          Draw.rect(gale.rainbowRegion, this.x, this.y, this.rotation - 90);
    Draw.color(this.heatColor.alpha(this.heat));
          Draw.rect(gale.heatRegion, this.x, this.y, this.rotation - 90);
    Draw.blend(Blending.normal())
          Draw.color()
  }
});
gale.range = 180;
gale.shootType = galeBullet
