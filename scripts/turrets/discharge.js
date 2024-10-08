const hitSpark = new Effect(30, e => {
	Draw.color(Color.white, Color.valueOf("81e1ff"), e.fin());
	Lines.stroke(e.fout() * 2)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 10);
	}});

  Angles.randLenVectors(e.id, 3, e.finpow() * 19.0, e.rotation, 360.0, hj);
});

const bullet = extend(ContinuousBulletType, {
	length: 250,
  damage: 30,
  shake: 2,
  draw(b){
		Draw.color(Color.valueOf("81e1ff"));
        Drawf.tri(b.x, b.y, 7, bullet.length, b.rotation());
        Drawf.tri(b.x, b.y, 7, 7, b.rotation() + 180);
		Draw.reset();
	},
	hitEffect: hitSpark
});

const disch = extend(ContinuousTurret, "discharge", {});
disch.range = 250;
disch.shootCone = 40;
disch.shootType = bullet;
