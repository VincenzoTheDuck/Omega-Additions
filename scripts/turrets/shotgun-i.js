const leadHit = new Effect(17, e => {
	Draw.color(Pal.bulletYellow, Pal.bulletYellowBack, e.fout());
  Lines.stroke(e.fout() * 1.5);

  randLenVectors(e.id, 5, e.finpow() * 10, (x, y) => {
      var ang = Mathf.angle(x, y);
      lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
  });
});

const leadDespawn = new Effect(15, e => {
	Lines.stroke(e.fout() * 1.5);

  Draw.color(Pal.bulletYellow);

  Lines.circle(e.x, e.y, (e.fin() * 9) + 2);

  Draw.color(Pal.bulletYellow, Pal.bulletYellowBack, e.fout());

  randLenVectors(e.id, 3, e.finpow() * 13, (x, y) => {
      var ang = Mathf.angle(x, y);
      lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
  });
});

const leadBullet = extend(BasicBulletType, {
	damage: 9,
  ammoMultiplier: 3,
  pierceCap: 2,
	speed: 6,
	lifetime: 17,
  drag: 0.01,
	hitEffect: leadHit,
	despawnEffect: leadDespawn,
	trailColor: Pal.bulletYellow,
  trailWidth: 1.7,
  trailLength: 10,
	draw(b){
		Draw.color(Pal.bulletYellow);
		Fill.circle(b.x, b.y, 1.7);
    drawTrail();
		Draw.reset();
	}
});

const scrapHit = new Effect(17, e => {
	Draw.color(Color.valueOf("e0b28d"), Color.valueOf("9b928b"), e.fout());
  Lines.stroke(e.fout() * 1.5);

  randLenVectors(e.id, 5, e.finpow() * 10, (x, y) => {
      var ang = Mathf.angle(x, y);
      lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
  });
});

const scrapDespawn = new Effect(15, e => {
	Lines.stroke(e.fout() * 1.5);

  Draw.color(Color.valueOf("e0b28d"));

  Lines.circle(e.x, e.y, (e.fin() * 9) + 2);

  Draw.color(Color.valueOf("e0b28d"), Color.valueOf("9b928b"), e.fout());

  randLenVectors(e.id, 3, e.finpow() * 13, (x, y) => {
      var ang = Mathf.angle(x, y);
      lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
  });
});

const scrapBullet = extend(BasicBulletType, {
	damage: 14,
  ammoMultiplier: 2,
  reloadMultiplier: 0.84,
  pierceCap: 4,
	speed: 6,
	lifetime: 17,
  drag: 0.01,
	hitEffect: scrapHit,
	despawnEffect: scrapDespawn,
	trailColor: Color.valueOf("e0b28d"),
  trailWidth: 1.7,
  trailLength: 10,
	draw(b){
		Draw.color(Color.valueOf("e0b28d"));
		Fill.circle(b.x, b.y, 1.7);
    drawTrail();
		Draw.reset();
	}
});

const shotgunI = extend(ItemTurret, "shotgun-i", {});
shotgunI.range = 90;
shotgunI.inaccuracy: 19;
shotgunI.shootCone: 23;
shotgunI.ammo(
  Items.lead, leadBullet,
  Items.scrap, scrapBullet
);
