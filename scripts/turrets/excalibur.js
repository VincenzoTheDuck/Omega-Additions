const excaliburHit = new Effect(40, e => {
	Draw.color(Color.white);
	Lines.stroke(e.fout() * 2)
	
	Lines.circle(e.x, e.y, e.fin() * 60);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 12);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 75.0, e.rotation, 360.0, hj);
});

const excaliburTrail = new Effect(60, e => {
	Draw.color(Color.white);
	
	Fill.circle(e.x, e.y, e.fout() * 5);
});

const excaliburBullet = extend(BasicBulletType, {
	splashDamage: 500,
  splashDamageRadius: 65,
	speed: 6,
	lifetime: 60,
	hitEffect: Fx.none,
	trailEffect: excaliburTrail,
	trailInterval: 5,
	despawnEffect: excaliburHit,
	despawnHit: true,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Color.white);
		Fill.circle(b.x, b.y, 5 * b.fout());
    Lines.stroke(3)
	  Lines.circle(b.x, b.y, b.fout() * 10);
		Draw.reset();
	}
});

const excalibur = extend(PowerTurret, "excalibur", {});
excalibur.range = 350;
excalibur.shootType = excaliburBullet;
