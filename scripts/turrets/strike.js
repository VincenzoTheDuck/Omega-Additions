const items = require("items/items")

const strikeHit = new Effect(30, e => {
	Draw.color(Color.white);
	Lines.stroke(e.fout() * 2)
	
	Lines.circle(e.x, e.y, e.fin() * 85);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 40.0, e.rotation, 360.0, hj);
});

const strikeBullet = extend(ArtilleryBulletType, {
	damage: 0,
	splashDamage: 350,
  splashDamageRadius: 85,
  ammoMultiplier: 1,
  weaveScl: 8,
  weaveMag: 10,
  width: 6,
  height: 8,
  shrinkX: 0.1,
  shrinkY: 0.2,
	speed: 3,
	lifetime: 116,
	hitEffect: strikeHit,
  despawnHit: true,
	despawnEffect: Fx.none,
  backColor: Color.valueOf("c1c3d4"),
  frontColor: Color.valueOf("f4f4f4"),
  trailColor: Color.valueOf("c1c3d4"),
  trailWidth: 2,
  trailLength: 20,
  trailSinScl: 2.5,
  trailSinMag: 0.5
});

const strike = extend(PowerTurret, "strike", {});
strike.range = 350;
strike.rotateSpeed = 0;
strike.shootCone = 360;
strike.shootType = strikeBullet,
