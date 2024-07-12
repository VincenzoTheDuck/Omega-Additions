const radiusHit = new Effect(15, e => {
	Draw.color(Pal.lancerLaser);
	Lines.stroke(e.fout() * 1.5)
	
	Fill.circle(e.x, e.y, e.fout() * 3);
	
	Lines.circle(e.x, e.y, (e.fin() * 10) + 3);
});

const radiusTrail = new Effect(30, e => {
	Draw.color(Pal.lancerLaser);
	
	Fill.circle(e.x, e.y, e.fout() * 3);
});

const radiusStar = extend(BasicBulletType, {
	damage: 95,
	speed: 3,
	lifetime: 40,
	hitEffect: radiusHit,
	trailEffect: radiusTrail,
	trailInterval: 2,
	despawnEffect: Fx.none,
	despawnHit: true,
	ammoMultiplier: 1,
	trailColor: Pal.lancerLaser,
	draw(b){
		Draw.color(Pal.lancerLaser);
		Fill.circle(b.x, b.y, 3);
		Draw.reset();
	}
});

const radius = extend(PowerTurret, "radius", {});
radius.range = 120;
radius.shootType = radiusStar
