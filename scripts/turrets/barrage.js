const items = require("items/items")

const diaHit = new Effect(20, e => {
	Draw.color(Color.white);
	Lines.stroke(e.fout() * 2)
	
	Lines.circle(e.x, e.y, e.fin() * 9);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 7);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 13.0, e.rotation, 360.0, hj);
});

const diaBullet = extend(BasicBulletType, {
	damage: 33,
  ammoMultiplier: 2,
  width: 4,
  height: 9,
  statusDuration: 80,
  pierceCap: 4,
	speed: 7,
	lifetime: 35,
	hitEffect: diaHit,
  despawnHit: true,
	despawnEffect: Fx.none,
  backColor: Color.valueOf("c1c3d4"),
  frontColor: Color.valueOf("f4f4f4"),
  trailColor: Color.valueOf("c1c3d4")
});

const sparkle = extend(ItemTurret, "sparkle", {});
sparkle.range = 250;
sparkle.inaccuracy = 3;
sparkle.shootCone = 5;
sparkle.ammo(
  items.diamond, diaBullet
);
