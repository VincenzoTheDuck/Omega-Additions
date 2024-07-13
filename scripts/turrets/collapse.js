const collapseDespawn = new Effect(15, e => {
	Lines.stroke(e.fout() * 1.5);

  Draw.color(Pal.meltdownHit);

  Lines.circle(e.x, e.y, e.fin() * 40);

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 33.0, e.rotation, 360.0, hj);
});

const collapseBolt = extend(ContinuousLaserBulletType, {
	damage: 140,
  speed: 4,
	lifetime: 70,
	despawnEffect: collapseDespawn,
	despawnHit: true,
	ammoMultiplier: 1,
	trailColor: Pal.meltdownHit,
  trailWidth: 8,
  trailLength: 20,
  drawSize: 400,
  length: 9
});

const collapse = extend(PowerTurret, "collapse", {});
collapse.range = 280;
collapse.shootType = collapseBolt;
collapse.shoot.shots = 7;
collapse.inaccuracy = 17;
collapse.shootCone = 20
