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
	shake: 1,
  damage: 30,
  shake: 2,
  draw(b){
		Draw.color(Color.valueOf("81e1ff"));
        Drawf.tri(b.x, b.y, 7, bullet.length, b.rotation());
        Drawf.tri(b.x, b.y, 7, 10, b.rotation() + 180);
		Draw.reset();
	},
	update(b){
		if(Mathf.chance(0.33)){
			shootSpark.at(b.x, b.y, b.rotation())
		}

		if(Mathf.chance(0.2)){
			shootParticle.at(b.x, b.y, b.rotation())
		}
		
		if(b.timer.get(1, b.damageInterval)){
            b.applyDamage(b);
		};
		if(b.shake > 0){
            Effect.shake(b.shake, b.shake, b);
        };

        b.updateBulletInterval(b);
        },
	hitEffect: hitSpark
});

const disch = extend(ContinuousTurret, "discharge", {});
disch.range = 250;
disch.shootCone = 40;
disch.shootType = bullet;
