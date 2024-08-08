const aurShock = new Effect(17, e => {
	Draw.color(Color.valueOf("38d3ff"));
	Lines.stroke(e.fout() * 2)
	
	Lines.circle(e.x, e.y, e.fin() * 14);
});

const aurSpark = new Effect(23, e => {
	Draw.color(Color.valueOf("38d3ff"));
	Lines.stroke(e.fout() * 1.25)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5);
	}});

  Angles.randLenVectors(e.id, 8, e.finpow() * 17.0, e.rotation, 360.0, hj);
});

const aurSmoke = new Effect(75, 300, e => {
	Draw.color(Color.valueOf("38d3ff"));

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 3.5;
    
      Fill.poly(e.x + x, e.y + y, 8, rad, Time.time * -0.22);
	}});
  
  Angles.randLenVectors(e.id, 7, e.fin(Interp.pow10Out) * 29.0, e.rotation + (Time.time * 0.18), 180.0, hj);
});

const aurShoot = new Effect(22, e => {
	Draw.color(Draw.color(Color.valueOf("38d3ff")));
	Lines.stroke(e.fout() * 1.25)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5);
	}});

  Angles.randLenVectors(e.id, 5, e.finpow() * 20.0, e.rotation, 40.0, hj);
});

const aurShootSmoke = new Effect(50, 300, e => {
	Draw.color(Color.valueOf("38d3ff"));

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 2;
    
      Fill.poly(e.x + x, e.y + y, 8, rad, Time.time);
	}});
  
  Angles.randLenVectors(e.id, 7, e.fin(Interp.pow10Out) * 24.0, e.rotation, 55.0, hj);
});

const aurTrail = new Effect(17, e => {
	Draw.color(Color.valueOf("38d3ff"));
	
	Fill.poly(e.x, e.y, 8, e.fout(Interp.pow5Out) * 2.5, Time.time * 0.5);
});

const aurBullet = extend(BasicBulletType, {
	shootEffect: aurShoot,
	smokeEffect: aurShootSmoke,
  damage: 175,
  pierce: true,
	speed: 3,
	lifetime: 60,
	despawnEffect: new MultiEffect(aurShock, aurSpark, aurSmoke),
  hitEffect: perSpark,
	trailEffect: perTrail,
	trailInterval: 5,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Color.valueOf("38d3ff"));
		Fill.poly(b.x, b.y, 8, 2.5, Time.time * 0.5);
		Draw.reset();
	}
});

const aur = extend(PowerTurret, "aurora", {});
aur.range = 180;
aur.shootType = aurBullet;
