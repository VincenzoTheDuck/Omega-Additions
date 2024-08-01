const perShock = new Effect(17, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fout() * 2)
	
	Lines.circle(e.x, e.y, e.fin() * 14);
});

const perSpark = new Effect(23, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fout() * 1.25)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5);
	}});

  Angles.randLenVectors(e.id, 8, e.finpow() * 17.0, e.rotation, 360.0, hj);
});

const perSmoke = new Effect(75, 300, e => {
	Draw.color(Pal.heal);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 3.5;
    
      Fill.poly(e.x + x, e.y + y, 8, rad, Time.time * -0.22);
	}});
  
  Angles.randLenVectors(e.id, 7, e.fin(Interp.pow10Out) * 29.0, e.rotation + (Time.time * 0.18), 180.0, hj);
});

const perShoot = new Effect(22, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fout() * 1.25)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5);
	}});

  Angles.randLenVectors(e.id, 5, e.finpow() * 20.0, e.rotation, 40.0, hj);
});

const perShootSmoke = new Effect(50, 300, e => {
	Draw.color(Pal.heal);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 2;
    
      Fill.poly(e.x + x, e.y + y, 8, rad, Time.time * (e.fin(Interp.pow5In) * 1.5));
	}});
  
  Angles.randLenVectors(e.id, 7, e.fin(Interp.pow10Out) * 24.0, e.rotation, 55.0, hj);
});

const perTrail = new Effect(17, e => {
	Draw.color(Pal.heal);
	
	Fill.poly(e.x, e.y, 6, e.fout(Interp.pow5Out) * 2.5, Time.time * 0.3);
});

const perIntTrail = new Effect(13, e => {
	Draw.color(Pal.heal);
	
	Fill.poly(e.x, e.y, 6, e.fout(Interp.pow5Out), Time.time * 0.3);
});

const perInterval = extend(BasicBulletType, {
  damage: 30,
  healPercent: 1.5,
  collidesTeam: true,
	speed: 6,
	lifetime: 20,
	despawnEffect: Fx.none,
  hitEffect: perShock,
	trailEffect: perIntTrail,
	despawnHit: true,
	trailInterval: 1,
	ammoMultiplier: 1,
  homingPower: 0.04,
	draw(b){
		Draw.color(Pal.heal);
		Fill.poly(b.x, b.y, 6, 1, Time.time * 0.5);
		Draw.reset();
	}
});

const perBullet = extend(BasicBulletType, {
	shootEffect: perShoot,
	smokeEffect: perShootSmoke,
  damage: 90,
  healPercent: 4.5,
  collidesTeam: true,
  pierce: true,
	speed: 3,
	lifetime: 60,
	despawnEffect: new MultiEffect(perShock, perSpark, perSmoke),
  hitEffect: perSpark,
	trailEffect: perTrail,
	trailInterval: 5,
	ammoMultiplier: 1,
  intervalBullet: perInterval,
  bulletInterval: 15,
  intervalBullets: 3,
	draw(b){
		Draw.color(Pal.heal);
		Fill.poly(b.x, b.y, 6, 2.5, Time.time * 0.3);
		Draw.reset();
	}
});

const per = extend(PowerTurret, "periodic", {});
per.range = 180;
per.shootType = perBullet;
per.targetHealing = true;
