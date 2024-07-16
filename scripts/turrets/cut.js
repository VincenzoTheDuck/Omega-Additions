const items = require("items/items")

const diaHit = new Effect(27, e => {
	Draw.color(Color.white);
	Lines.stroke(e.fout() + 2)
	
	Lines.circle(e.x, e.y, e.fin() * 35);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 40.0, e.rotation, 360.0, hj);
});

const diaBullet = extend(MissileBulletType, {
	damage: 60,
	splashDamage: 130,
  splashDamageRadius: 35,
  ammoMultiplier: 3,
  homingPower: 0.09,
  weaveScl: 4.5,
  weaveMag: 7,
  width: 6.5,
  height: 10,
	speed: 5,
	lifetime: 40,
	hitEffect: diaHit,
  despawnHit: true,
	despawnEffect: Fx.none,
  backColor: Color.valueOf("c1c3d4"),
  frontColor: Color.valueOf("f4f4f4"),
  trailColor: Color.valueOf("c1c3d4")
});

const cut = extend(ItemTurret, "cut", {});
cut.range = 200;
cut.inaccuracy = 13;
cut.shootCone = 15;
cut.ammo(
  items.diamond, diaBullet
);
