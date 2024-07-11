const radiusHit = new Effect(20, e => {
	Draw.color(Pal.lancerLaser);
	Lines.stroke(e.fout() * 1.5)
	
	Fill.circle(b.x, b.y, e.fout() * 3);
	
	Lines.circle(b.x, b.y, (e.fout() * 10) + 6);
});

const radiusStar = extend(BasicBulletType, {
	damage: 95,
	speed: 3,
	lifetime: 40,
	hitEffect: radiusHit,
	homingPower: 0.08,
	despawnHit: true,
	ammoMultiplier: 1,
	trailColor: Pal.lancerLaser,
	trailWidth: 3,
	trailLength: 9,
	draw(b){
		Draw.color(Pal.lancerLaser);
		Fill.circle(b.x, b.y, 3);
		Draw.reset();
	}
});

const radius = extend(PowerTurret, "radius", {});
radius.range = 120;
radius.shootType = radiusStar
