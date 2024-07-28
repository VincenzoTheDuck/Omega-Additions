const subtShock = new Effect(20, e => {
	Draw.color(Color.valueOf("bb62ff"));
	Lines.stroke(e.fout() * 2)
	
	Lines.circle(e.x, e.y, e.fin() * 85);
});

const subtSpark = new Effect(50, e => {
	Draw.color(Color.valueOf("d77aff"));
	Lines.stroke(e.fout() * 3)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 25);
	}});

  Angles.randLenVectors(e.id, 13, e.finpow() * 100.0, e.rotation, 360.0, hj);
});

const subtSmoke = new Effect(300, 300, e => {
	Draw.color(Color.valueOf("763dcf"));

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = (e.fout(Interp.pow5Out) * rand.random(0.5, 1)) * 7;
    
      Fill.circle(e.x + x, e.y + y, rad);
	}});

  Angles.randLenVectors(e.id, 13, e.fin(Interp.pow10Out) * 75.0, e.rotation, 360.0, hj);
});

const subtTrail = new Effect(85, e => {
	Draw.color(Color.valueOf("d77aff"));
	
	Fill.circle(e.x, e.y, e.fout() * 7.5);
});

const subtBullet = extend(BasicBulletType, {
  damage: 0,
	splashDamage: 2200,
  splashDamageRadius: 85,
	speed: 5,
	lifetime: 76,
	despawnEffect: Fx.none,
	trailEffect: subtTrail,
	trailInterval: 5,
	hitEffect: new MultiEffect(subtShock, subtSpark, subtSmoke),
	despawnHit: true,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Color.valueOf("d77aff"));
		Fill.circle(b.x, b.y, 7.5);
	}
});

const subt = extend(PowerTurret, "subterfuge", {});
subt.range = 380;
subt.shootType = subtBullet;
