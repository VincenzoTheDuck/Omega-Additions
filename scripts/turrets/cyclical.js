const cyclCharge = new Effect(40, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fin() * 4);
	
	Lines.circle(e.x, e.y, e.fout() * 16);

	Lines.stroke(e.fin() * 3)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fin() * 7.5);
	}});

  Angles.randLenVectors(e.id, 10, e.fout() * 20.0, e.rotation, 360.0, hj);

	Fill.poly(e.x, e.y, 6, e.fin() * 2.5, Time.time * 0.3);
});



const cyclShock = new Effect(20, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fout() * 2)
	
	Lines.circle(e.x, e.y, e.fin() * 25);
});

const cyclSpark = new Effect(35, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fout() * 2)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 7);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 33.0, e.rotation, 360.0, hj);
});

const cyclSmoke = new Effect(50, 300, e => {
	Draw.color(Pal.heal);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 3.5;
    
      Fill.poly(e.x + x, e.y + y, 4, rad, Time.time * -0.22);
	}});
  
  Angles.randLenVectors(e.id, 7, e.fin(Interp.pow10Out) * 24.0, e.rotation + (Time.time * 0.18), 180.0, hj);
});

const cyclShoot = new Effect(22, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fout() * 2)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 10);
	}});

  Angles.randLenVectors(e.id, 5, e.finpow() * 45.0, e.rotation, 40.0, hj);
});

const cyclTrail = new Effect(20, e => {
	Draw.color(Pal.heal);
	
	Fill.poly(e.x, e.y, 6, e.fout(Interp.pow10Out) * 3.5, Time.time * 0.2);
});

const cyclBullet = extend(BasicBulletType, {
	chargeEffect: cyclCharge,
	shootEffect: cyclShoot,
	smokeEffect: Fx.none,
  damage: 120,
  healPercent: 5.5,
  collidesTeam: true,
  pierce: true,
	speed: 4,
	lifetime: 55,
	despawnEffect: new MultiEffect(perShock, perSpark, perSmoke),
  hitEffect: perSpark,
	trailEffect: perTrail,
	trailInterval: 5,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Pal.heal);
		Fill.poly(b.x, b.y, 6, 3.5, Time.time * 0.2);
		Draw.reset();
	}
});

const cycl = extend(PowerTurret, "cyclical", {});
cycl.range = 220;
cycl.shootType = cyclBullet;
cycl.targetHealing = true;
cycl.shoot.firstShotDelay = cyclCharge.lifetime;
