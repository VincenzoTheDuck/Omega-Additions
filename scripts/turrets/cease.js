const items = require("items/items")

const ceaseHit = new Effect(15, e => {
	Draw.color(Color.valueOf("a56bff"));
	Lines.stroke(e.fout() * 1.5);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5.5);
	}});

  Angles.randLenVectors(e.id, 4, e.finpow() * 23.0, e.rotation, 360.0, hj);
});

const ceaseTrail = new Effect(20, e => {
	Draw.color(Color.valueOf("a56bff"));
	Lines.stroke(e.fout() * 1.5);

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngleCenter(e.x + x, e.y + y, e.rotation, e.fout() * 10);
	}});

  Angles.randLenVectors(e.id, 1, e.finpow() * 4.0, e.rotation, 2.0, hj);
});

const ceaseEnd = new Effect(20, e => {
	Draw.color(Color.valueOf("a56bff"));

  Drawf.tri(e.x, e.y, 1.5 * e.fout(), 25 * e.fout(), e.rotation);
  Drawf.tri(e.x, e.y, 1.5 * e.fout(), 13 * e.fout(), e.rotation + 180);
});

const ceaseShoot = new Effect(15, e => {
	Draw.color(Color.valueOf("a56bff"));

  for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 2 * e.fout(), 18 * e.fout(), e.rotation + (i * 90));
    }
});

const ceaseShoot2 = new Effect(20, e => {
	Draw.color(Color.valueOf("a56bff"));
	Lines.stroke(e.fout() * 1.5);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5.5);
	}});

  Angles.randLenVectors(e.id, 7, e.finpow() * 35.0, e.rotation, 60.0, hj);
});

const ceaseBullet = extend(RailBulletType, {
	damage: 130,
  ammoMultiplier: 1,
  length: 200,
  status: StatusEffects.sapped,
  statusDuration: 60,
	speed: 5,
	lifetime: 32,
	hitEffect: ceaseHit,
  endEffect: ceaseEnd,
  pointEffectSpace: 10,
  pointEffect: ceaseTrail,
  shootEffect: ceaseShoot,
  smokeEffect: ceaseShoot2
});

const cease = extend(ItemTurret, "cease", {});
cease.range = 200;
cease.inaccuracy = 7;
cease.shootCone = 10;
cease.ammo(
  items.gartrium, ceaseBullet
);
