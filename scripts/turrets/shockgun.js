const leadHit = new Effect(17, e => {
	Draw.color(Pal.bulletYellow, Pal.bulletYellowBack, e.fout());
  Lines.stroke(e.fout() * 1.5);

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 7, e.finpow() * 17.0, e.rotation, 360.0, hj);
});

const leadDespawn = new Effect(15, e => {
	Lines.stroke(e.fout() * 1.5);

  Draw.color(Pal.bulletYellow);

  Lines.circle(e.x, e.y, (e.fin() * 9) + 2);

  Draw.color(Pal.bulletYellow, Pal.bulletYellowBack, e.fout());

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 17.0, e.rotation, 360.0, hj);
});

const leadBullet = extend(BasicBulletType, {
	damage: 45,
  ammoMultiplier: 3,
  pierceCap: 6,
	speed: 7,
	lifetime: 28,
  drag: 0.03,
	hitEffect: leadHit,
	despawnEffect: leadDespawn,
  lightning: 2,
  lightningColor: Pal.bulletYellow,
  lightningDamage: 14,
  lightningLength: 7,
	draw(b){
		Draw.color(Pal.bulletYellow);
		Fill.circle(b.x, b.y, 1.7);
		Draw.reset()
	}
});

const shockgun = extend(ItemTurret, "shockgun", {});
shockgun.range = 200;
shockgun.inaccuracy = 30;
shockgun.shootCone = 37;
shockgun.shoot.shots = 15;
shockgun.ammo(
  Items.lead, leadBullet
);
