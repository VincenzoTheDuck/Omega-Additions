const coefShock = new Effect(60, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fout() * 7)
	
	Lines.circle(e.x, e.y, 75);
});

const coefSpark = new Effect(45, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fout() * 4)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 10);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 90.0, e.rotation, 360.0, hj);
});

const coefShoot = new Effect(22, e => {
	Draw.color(Pal.heal);
	Lines.stroke(e.fout() * 4)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 13);
	}});

  Angles.randLenVectors(e.id, 8, e.finpow() * 60.0, e.rotation, 50.0, hj);
});

const coefTrail = new Effect(30, e => {
	Draw.color(Pal.heal);
	
	Fill.poly(e.x, e.y, 4, e.fout(Interp.pow10Out) * 3.5, Time.time * 0.5);
});

const coefBullet = extend(EmpBulletType, {
  radius: 75,
  splashDamageRadius: 75,
  splashDamage: 200,
  scaleLife: true,
  timeIncrease: 3,
  timeDuration: 8 * 60,
  powerDamageScl: 3,
  powerSclDecrease: 0.17,
	shootEffect: coefShoot,
	smokeEffect: Fx.none,
  damage: 70,
  healPercent: 5.5,
  collidesTeam: true,
  despawnHit: true,
	speed: 4,
	lifetime: 55,
	despawnEffect: Fx.none,
  hitEffect: new MultiEffect(coefShock, coefSpark),
	trailEffect: coefTrail,
	trailInterval: 5,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Pal.heal);
		Fill.poly(b.x, b.y, 4, 3.5, Time.time * 0.5);
		Draw.reset();
	}
});

const coef = extend(PowerTurret, "coefficient", {});
coef.range = 220;
coef.shootType = coefBullet;
coef.targetHealing = true;
