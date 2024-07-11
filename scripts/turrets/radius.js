/*const radiusHit = new Effect(20, e => {
	Draw.color(Pal.lancerLaser);
  Lines.stroke(e.fout() * 3);
  Lines.circle(e.x, e.y, 4 + e.finpow() * 10);

  for(let i = 0; i < 4; i++){
      Drawf.tri(e.x, e.y, 15, 4 * e.fout(), i*90);
  };

  Draw.color();
  for(let i = 0; i < 4; i++){
      Drawf.tri(e.x, e.y, 15, 2 * e.fout(), i*90);
  }
});

const radiusStar = extend(BasicBulletType, {
  damage: 100,
	speed: 4.5,
	lifetime: 30,
	hitEffect: radiusHit,
	homingPower: 0.08,
	despawnHit: true,
	ammoMultiplier: 1,
	draw(b){
		Draw.color(Pal.lancerLaser);

    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 4, 9, (i*90) + Time.time);
    };

    Draw.color();
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 2, 6), (i*90) + Time.time);
    };
    
		Draw.reset();
	}
});*/

const radius = extend(PowerTurret, "radius", {});
radius.range = 120;
radius.shootType = radiusStar
