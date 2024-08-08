const shootSpark = new Effect(15, e => {
	Draw.color(Color.white, Color.valueOf("81e1ff"), e.fin());
	Lines.stroke(e.fout() * 2.5)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 8);
	}});

  Angles.randLenVectors(e.id, 3, e.finpow() * 43.0, e.rotation, 34.0, hj);
});

const shootParticle = new Effect(15, 300, e => {
	Draw.color(Color.valueOf("81e1ff"));

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 2;
    
      Fill.circle(e.x + x, e.y + y, rad);
	}});

  Angles.randLenVectors(e.id, 3, e.fin(Interp.pow10Out) * 47.0, e.rotation, 38.0, hj);
});

const hitSpark = new Effect(30, e => {
	Draw.color(Color.white, Color.valueOf("81e1ff"), e.fin());
	Lines.stroke(e.fout() * 2)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 10);
	}});

  Angles.randLenVectors(e.id, 3, e.finpow() * 55.0, e.rotation, 45.0, hj);
});

const bullet = extend(ContinuousBulletType, {
	length: 250,
  damage: 30,
  shake: 2,
  draw(b){
		Draw.color(Color.valueOf("81e1ff"));
        Drawf.tri(b.x, b.y, 7, bullet.length, b.rotation());
        Drawf.tri(b.x, b.y, 7, 10, b.rotation() + 180);
		Draw.reset();
	},
	update(b){
		if(Mathf.chance(0.66)){
			shootSpark.at(b.x, b.y, b.rotation())
		}

		if(Mathf.chance(0.48)){
			shootParticle.at(b.x, b.y, b.rotation())
		}
	},
	hitEffect: hitSpark
});

const disch = extend(ContinuousTurret, "discharge", {});
disch.range = 250;
disch.shootCone = 40;
disch.shootType = bullet;
