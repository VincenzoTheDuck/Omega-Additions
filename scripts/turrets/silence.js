const items = require("items/items")

const silenceHit1 = new Effect(23, e => {
	Draw.color(Color.valueOf("a56bff"));
	Lines.stroke(e.fout() * 2);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 7);
	}});

  Angles.randLenVectors(e.id, 4, e.finpow() * 50.0, e.rotation, 360.0, hj);
});

const silenceHit2 = new Effect(30, e => {
	Draw.color(Color.valueOf("a56bff"));
	Lines.stroke(e.fout() * 3);

  Lines.circle(e.x, e.y, 55.0 * e.fout());
});

const silenceTrail = new Effect(30, e => {
	Draw.color(Color.valueOf("a56bff"));
	Lines.stroke(e.fout() * 2);

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngleCenter(e.x + x, e.y + y, e.rotation, e.fout() * 20);
	}});

  Angles.randLenVectors(e.id, 1, e.finpow() * 7.0, e.rotation, 2.0, hj);
});

const silenceShoot = new Effect(20, e => {
	Draw.color(Color.valueOf("a56bff"));

  for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 3.0 * e.fout(), 30 * e.fout(), e.rotation + 90 + (i * 180));
    }
});

const silenceShoot2 = new Effect(17, e => {
	Draw.color(Color.valueOf("a56bff"));
	Lines.stroke(e.fout() * 2);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 7);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 40.0, e.rotation, 75.0, hj);
});

const silenceBullet = extend(PointBulletType, {
	damage: 300,
  splashDamage: 2000,
  splashDamageRadius: 50,
  ammoMultiplier: 1,
  speed: 320,
  status: StatusEffects.sapped,
  statusDuration: 120,
	hitEffect: new MultiEffect(silenceHit1, silenceHit2),
  despawnEffect: Fx.none,
  despawnHit: true,
  trailSpacing: 20,
  trailEffect: silenceTrail,
  shootEffect: silenceShoot,
  smokeEffect: silenceShoot2
});

const silence = extend(ItemTurret, "silence", {});
silence.range = 320;
silence.shootCone = 2;
silence.ammo(
  items.gartrium, silenceBullet
);
