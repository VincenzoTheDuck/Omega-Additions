const aurShock = new Effect(17, e => {
	Draw.blend(Blending.additive);
	Draw.color(Color.valueOf("3ad4ff"));
	Lines.stroke(e.fout() * 2)
	
	Lines.circle(e.x, e.y, e.fin() * 14);
	Draw.blend();
});

const aurSpark = new Effect(23, e => {
	Draw.blend(Blending.additive);
	Draw.color(Color.valueOf("3ad4ff"));
	Lines.stroke(e.fout() * 1.25)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5);
	}});

  Angles.randLenVectors(e.id, 8, e.finpow() * 17.0, e.rotation, 360.0, hj);
	Draw.blend();
});

const aurSmoke = new Effect(75, 300, e => {
	Draw.blend(Blending.additive);
	Draw.color(Color.valueOf("3ad4ff"));

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 3.5;
    
      Fill.poly(e.x + x, e.y + y, 8, rad, Time.time * -0.22);
	}});
  
  Angles.randLenVectors(e.id, 7, e.fin(Interp.pow10Out) * 29.0, e.rotation + (Time.time * 0.18), 180.0, hj);
	Draw.blend();
});

const aurShoot = new Effect(22, e => {
	Draw.blend(Blending.additive);
	Draw.color(Color.valueOf("3ad4ff"));
	Lines.stroke(e.fout() * 1.25)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5);
	}});

  Angles.randLenVectors(e.id, 5, e.finpow() * 20.0, e.rotation, 40.0, hj);
	Draw.blend();
});

const aurShootSmoke = new Effect(50, 300, e => {
	Draw.blend(Blending.additive);
	Draw.color(Color.valueOf("3ad4ff"));

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 2;
    
      Fill.poly(e.x + x, e.y + y, 8, rad, Time.time);
	}});
  
  Angles.randLenVectors(e.id, 7, e.fin(Interp.pow10Out) * 24.0, e.rotation, 55.0, hj);
	Draw.blend();
});

const aurTrail = new Effect(17, e => {
	Draw.blend(Blending.additive);
	Draw.color(Color.valueOf("3ad4ff"));
	
	Fill.poly(e.x, e.y, 8, e.fout(Interp.pow5Out) * 2.5, Time.time * 0.5);
	Draw.blend();
});

const aurBullet = extend(BasicBulletType, {
	shootEffect: aurShoot,
	smokeEffect: aurShootSmoke,
  damage: 175,
  pierce: true,
	speed: 3,
	lifetime: 60,
	despawnEffect: new MultiEffect(aurShock, aurSpark, aurSmoke),
  hitEffect: aurSpark,
	trailEffect: aurTrail,
	trailInterval: 5,
	ammoMultiplier: 1,
	draw(b){
		Draw.blend(Blending.additive);
	Draw.color(Color.valueOf("3ad4ff"));
		Fill.poly(b.x, b.y, 8, 2.5, Time.time * 0.5);
	Draw.blend();
		Draw.reset();
	}
});

const aur = extend(PowerTurret, "aurora", {});
aur.range = 180;
aur.shootType = aurBullet;
