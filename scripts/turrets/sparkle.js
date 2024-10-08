const items = require("items/items")

const diaHit = new Effect(20, e => {
	Draw.color(Color.white);
	Lines.stroke(e.fout() * 2)
	
	Lines.circle(e.x, e.y, e.fin() * 20);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 33.0, e.rotation, 360.0, hj);
});

const diaBullet = extend(MissileBulletType, {
	damage: 45,
	splashDamage: 95,
  splashDamageRadius: 20,
  ammoMultiplier: 3,
  homingPower: 0.09,
  weaveScl: 8,
  weaveMag: 10,
  width: 5,
  height: 8,
  statusDuration: 80,
	speed: 5,
	lifetime: 32,
	hitEffect: diaHit,
  despawnHit: true,
	despawnEffect: Fx.none,
  backColor: Color.valueOf("c1c3d4"),
  frontColor: Color.valueOf("f4f4f4"),
  trailColor: Color.valueOf("c1c3d4")
});

const sparkle = extend(ItemTurret, "sparkle", {});
sparkle.range = 160;
sparkle.inaccuracy = 7;
sparkle.shootCone = 10;
sparkle.ammo(
  items.diamond, diaBullet
);
