const plastHit = new Effect(17, e => {
	Draw.color(Color.valueOf("96f58c"));
  Lines.stroke(e.fout() * 1.5);

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 7, e.finpow() * 17.0, e.rotation, 360.0, hj);
});

const plastDespawn = new Effect(15, e => {
	Lines.stroke(e.fout() * 1.5);

  Draw.color(Color.valueOf("96f58c"));

  Lines.circle(e.x, e.y, (e.fin() * 9) + 2);

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 17.0, e.rotation, 360.0, hj);
});

const plastBullet = extend(BasicBulletType, {
	damage: 44,
  ammoMultiplier: 3,
  pierceCap: 5,
  status: StatusEffects.corroded,
  statusDuration: 160,
	speed: 6,
	lifetime: 24,
	hitEffect: plastHit,
	despawnEffect: plastDespawn,
	draw(b){
		Draw.color(Color.valueOf("96f58c"));
		Fill.circle(b.x, b.y, 1.7);
		Draw.reset()
	}
});

const ester = extend(ItemTurret, "ester", {});
ester.range = 160;
ester.inaccuracy = 2;
ester.shootCone = 4;
ester.shoot.shots = 5;
ester.shoot.shotDelay = 4;
ester.ammo(
  Items.plastanium, plastBullet
);
