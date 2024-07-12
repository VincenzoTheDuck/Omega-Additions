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
	damage: 14,
	collidesAir: false,
  ammoMultiplier: 5,
  pierceCap: 4,
	speed: 6,
	lifetime: 23,
  drag: 0.01,
	hitEffect: leadHit,
	despawnEffect: leadDespawn,
	draw(b){
		Draw.color(Pal.bulletYellow);
		Fill.circle(b.x, b.y, 1.7);
		Draw.reset()
	}
});

const graphiteHit = new Effect(17, e => {
	Draw.color(Pal.bulletYellow, Pal.bulletYellowBack, e.fout());
  Lines.stroke(e.fout() * 1.5);

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 7, e.finpow() * 17.0, e.rotation, 360.0, hj);
});

const graphiteDespawn = new Effect(15, e => {
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

const graphiteBullet = extend(BasicBulletType, {
	damage: 34,
	collidesAir: false,
  ammoMultiplier: 4,
  reloadMultiplier: 0.64,
  pierceCap: 6,
	speed: 6,
	lifetime: 23,
  drag: 0.01,
	hitEffect: graphiteHit,
	despawnEffect: graphiteDespawn,
	draw(b){
		Draw.color(Pal.bulletYellow);
		Fill.circle(b.x, b.y, 1.7);
		Draw.reset()
	}
});

const scrapHit = new Effect(17, e => {
	Draw.color(Color.valueOf("e0b28d"), Color.valueOf("9b928b"), e.fout());
  Lines.stroke(e.fout() * 1.5);


	const hj = new Floatc2({get: function(x, y){
		 var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 7, e.finpow() * 17.0, e.rotation, 360.0, hj);
});

const scrapDespawn = new Effect(15, e => {
	Lines.stroke(e.fout() * 1.5);

  Draw.color(Color.valueOf("e0b28d"));

  Lines.circle(e.x, e.y, (e.fin() * 9) + 2);

  Draw.color(Color.valueOf("e0b28d"), Color.valueOf("9b928b"), e.fout());

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 17.0, e.rotation, 360.0, hj);
});

const scrapBullet = extend(BasicBulletType, {
	damage: 25,
	collidesAir: false,
  ammoMultiplier: 4,
  reloadMultiplier: 0.76,
  pierceCap: 7,
	speed: 6,
	lifetime: 23,
  drag: 0.01,
	hitEffect: scrapHit,
	despawnEffect: scrapDespawn,
	draw(b){
		Draw.color(Color.valueOf("e0b28d"));
		Fill.circle(b.x, b.y, 1.7);
		Draw.reset()
	}
});

const shotgunI = extend(ItemTurret, "shotgun-i", {});
shotgunI.range = 135;
shotgunI.inaccuracy = 21;
shotgunI.shootCone = 27;
shotgunI.shoot.shots = 10;
shotgunI.ammo(
  Items.lead, leadBullet,
  Items.scrap, scrapBullet,
  Items.graphite, graphiteBullet
);
