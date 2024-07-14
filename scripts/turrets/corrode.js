const corrodeHit = new Effect(15, e => {
	Lines.stroke(e.fout() * 1.5);

  Draw.color(Color.valueOf("96f58c"));

  Lines.circle(e.x, e.y, e.fin() * 22);

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 7, e.finpow() * 17.0, e.rotation, 360.0, hj);

  const hj1 = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Fill.circle(e.x + x, e.y + y, 1);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 30.0, e.rotation, 360.0, hj1);
});

const corrodeShell = extend(ArtilleryBulletType, {
	splashDamage: 33,
  splashDamageRadius: 22,
  status: StatusEffects.corroded,
  statusDuration: 80,
  damage: 0,
	speed: 5,
	lifetime: 30,
	hitEffect: Fx.none,
	despawnEffect: corrodeHit,
  backColor: Color.valueOf("96f58c"),
	draw(b){
		Draw.color(Color.valueOf("96f58c"));
		Fill.circle(b.x, b.y, 2.5);
		Draw.reset()
	}
});

const corrode = extend(LiquidTurret, "corrode", {});
corrode.range = 150;
corrode.shootCone = 4;
corrode.ammo(
  Vars.content.getByName(ContentType.liquid, "omega-adds-acid"), corrodeShell
);
