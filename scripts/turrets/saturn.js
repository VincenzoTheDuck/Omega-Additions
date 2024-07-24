const saturnHit = new Effect(40, e => {
	Draw.color(Pal.redLight);
	Lines.stroke(e.fout() * 3)
	
	Lines.circle(e.x, e.y, e.fin() * 95);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6);
	}});

  Angles.randLenVectors(e.id, 13, e.finpow() * 110.0, e.rotation, 360.0, hj);
});

const saturnBullet = extend(ArtilleryBulletType, {
  sprite: "shell",
	damage: 0,
	splashDamage: 350,
  splashDamageRadius: 95,
  scaledSplashDamage: true,
  ammoMultiplier: 1,
  width: 17,
  height: 19,
  shrinkX: 0.1,
  shrinkY: 0.2,
	speed: 4,
	lifetime: 116,
  hitSound: Sounds.titanExplosion,
	hitEffect: new MultiEffect(saturnHit, Fx.titanSmoke),
  despawnHit: true,
	despawnEffect: Fx.none,
  backColor: Pal.redLight,
  frontColor: Color.white,
  trailColor: Pal.redLight,
  trailWidth: 2.5,
  trailLength: 60
});

const saturn = extend(ItemTurret, "saturn", {});
saturn.range = 350;
saturn.shootWarmupSpeed = 0.05;
saturn.outlineColor = Pal.darkOutline;
saturn.ammo(
  Items.thorium, saturnBullet
);
