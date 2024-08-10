const hit = new Effect(15, e => {
	Draw.color(Pal.surge);
	Lines.stroke(e.fout() * 1.5);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5.5);
	}});

  Angles.randLenVectors(e.id, 6, e.finpow() * 23.0, e.rotation, 360.0, hj);
});

const trail = new Effect(20, e => {
	Draw.color(Pal.surge);
	Lines.stroke(e.fout() * 2);

	Lines.lineAngleCenter(e.x, e.y, e.rotation, 13 + (e.fout() * 7));

	const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngleCenter(e.x + x, e.y + y, e.rotation, e.fout() * 20);
	}});

  Angles.randLenVectors(e.id, 3, e.finpow() * 7.0, e.rotation, 10.0, hj);
});

const end = new Effect(20, e => {
	Draw.color(Pal.surge);

  Drawf.tri(e.x, e.y, 2 * e.fout(), 25 * e.fout(), e.rotation);
  Drawf.tri(e.x, e.y, 2 * e.fout(), 13 * e.fout(), e.rotation + 180);
});

const shoot = new Effect(15, e => {
	Draw.color(Color.valueOf("a56bff"));

  for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 2 * e.fout(), 18 * e.fout(), e.rotation + 90 + (i * 180));
    }
});

const shoot2 = new Effect(20, e => {
	Draw.color(Pal.surge);
	Lines.stroke(e.fout() * 1.5);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 5.5);
	}});

  Angles.randLenVectors(e.id, 7, e.finpow() * 35.0, e.rotation, 60.0, hj);
});

const bullet = extend(RailBulletType, {
	damage: 3000,
  ammoMultiplier: 1,
  length: 260,
	hitEffect: ceaseHit,
  endEffect: ceaseEnd,
  pointEffectSpace: 20,
  pointEffect: ceaseTrail,
  shootEffect: ceaseShoot
});

const nightfall = extend(ItemTurret, "nightfall", {});
nightfall.range = 260;
nightfall.shootCone = 3;
nightfall.smokeEffect = ceaseShoot2;
nightfall.ammo(
  Items.surgeAlloy, bullet
);
