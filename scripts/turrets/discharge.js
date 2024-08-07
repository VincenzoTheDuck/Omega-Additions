const bullet = extend(ContinuousBulletType, {
	length: 250,
  damage: 6.5,
  shake: 2,
  draw(b){
		Draw.color(Color.valueOf("81e1ff"));
        Drawf.tri(b.x, b.y, 7, bullet.length, b.rotation());
        Drawf.tri(b.x, b.y, 7, 10, b.rotation() + 180);
		Draw.reset();
	}
});

const disch = extend(ContinuousTurret, "discharge", {});
disch.range = 250;
disch.shootCone = 40;
disch.shootType = bullet;
