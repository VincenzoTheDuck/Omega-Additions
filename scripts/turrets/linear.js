const linearHit = new Effect(23, e => {
	Draw.color(Pal.lancerLaser);
	Lines.stroke(e.fout() * 1.5)
	
	Fill.circle(e.x, e.y, e.fout() * 4.5);
	
	Lines.circle(e.x, e.y, e.fin() * 40);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6 + 1);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 46.0, e.rotation, 360.0, hj);
});

const linearTrail = new Effect(60, e => {
	Draw.color(Pal.lancerLaser);
	
	Fill.circle(e.x, e.y, e.fout() * 4.5);
});

const linearBolt = extend(BasicBulletType, {
	splashDamage: 100,
  splashDamageRadius: 40,
	speed: 6,
	lifetime: 46,
	hitEffect: linearHit,
	trailEffect: linearTrail,
	trailInterval: 5,
	despawnEffect: Fx.none,
	despawnHit: true,
	ammoMultiplier: 1,
	trailColor: Pal.lancerLaser,
	draw(b){
		Draw.color(Pal.lancerLaser);
		Fill.circle(b.x, b.y, 4.5);
		Draw.reset();
	}
});

const linear = extend(PowerTurret, "linear", {});
linear.range = 280;
linear.shootType = linearBolt;
linear.shoot.shots = 3;
linear.shoot.shotDelay = 10;
