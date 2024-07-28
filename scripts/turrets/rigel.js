const rigelHit = new Effect(15, e => {
	Draw.color(Pal.surge);
	Lines.stroke(e.fout() * 1.5)
	
	Fill.circle(e.x, e.y, e.fout() * 3);
	
	Lines.circle(e.x, e.y, (e.fin() * 10) + 3);
});

const rigelTrail = new Effect(60, e => {
	Draw.color(Pal.surge);
	
	Fill.circle(e.x, e.y, e.fout() * 5);
});

const rigelStar = extend(BasicBulletType, {
  damage: 500,
	splashDamage: 2000,
	speed: 6,
	lifetime: 60,
	hitEffect: rigelHit,
	trailEffect: rigelTrail,
	trailInterval: 2,
	despawnEffect: Fx.none,
	despawnHit: true,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Pal.surge);
		Fill.circle(b.x, b.y, 5);
		Draw.reset();
	}
});

const rigel = extend(PowerTurret, "rigel", {});
rigel.range = 360;
rigel.shootType = rigelStar
