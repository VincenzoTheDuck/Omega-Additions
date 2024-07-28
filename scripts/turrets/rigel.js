const rigelShock = new Effect(20, e => {
	Draw.color(Pal.surge);
	Lines.stroke(e.fout() * 3.5)
	
	Lines.circle(e.x, e.y, e.fin() * 50);
});

const rigelSpark = new Effect(75, e => {
	Draw.color(Pal.surge);
	Lines.stroke(e.fout() * 3)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 25);
	}});

  Angles.randLenVectors(e.id, 19, e.finpow() * 70.0, e.rotation, 360.0, hj);
});

const rigelSmoke = new Effect(350, 300, e => {
	Draw.color(Pal.surge);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 8;
    
      Fill.circle(e.x + x, e.y + y, rad);
	}});

  Angles.randLenVectors(e.id, 21, e.fin(Interp.pow10Out) * 75.0, e.rotation, 360.0, hj);
});

const rigelTrail = new Effect(60, e => {
	Draw.color(Pal.surge);
	
	Fill.circle(e.x, e.y, e.fout() * 5);
});

const rigelStar = extend(BasicBulletType, {
  damage: 500,
	splashDamage: 2000,
	splashDamageRadius: 50,
	speed: 6,
	lifetime: 60,
	hitEffect: new MultiEffect(rigelShock, rigelSpark, rigelSmoke),
	trailEffect: rigelTrail,
	trailInterval: 3,
	despawnEffect: Fx.none,
	despawnHit: true,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Pal.surge);
		Fill.circle(b.x, b.y, 5);
		Draw.reset();
	}
});

const rigel = extend(PowerTurret, "rigel", {});
rigel.range = 360;
rigel.shootType = rigelStar
