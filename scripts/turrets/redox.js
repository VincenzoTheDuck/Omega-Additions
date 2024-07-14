const plastDespawn = new Effect(15, e => {
	Lines.stroke(e.fout() * 1.5);

  Draw.color(Color.valueOf("96f58c"));

  Lines.circle(e.x, e.y, e.fin() * 40);

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 47.0, e.rotation, 360.0, hj);
});

const plastBullet = extend(MissileBulletType, {
	damage: 22,
	splashDamage: 64,
  splashDamageRadius: 40,
  ammoMultiplier: 5,
  status: StatusEffects.corroded,
  homingPower: 0.09,
  weaveScl: 5,
  weaveMag: 3,
  statusDuration: 220,
	speed: 6,
	lifetime: 50,
	hitEffect: Fx.none,
	despawnEffect: plastDespawn,
  backColor:Color.valueOf("62ae7f"),
  frontColor: Color.valueOf("96f58c"),
  trailColor: Color.valueOf("62ae7f")
});

const redox = extend(ItemTurret, "redox", {});
redox.range = 300;
redox.inaccuracy = 6;
redox.shootCone = 14;
redox.ammo(
  Items.plastanium, plastBullet
);
