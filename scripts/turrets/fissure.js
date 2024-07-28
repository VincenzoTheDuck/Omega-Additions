const items = require("items/items")

const range = 110;
const brange = range + 15;

const thorShoot = new Effect(37, e => {
	Draw.color(Color.white, Pal.redLight, e.fin());
	Lines.stroke(e.fout() * 2.5)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 8);
	}});

  Angles.randLenVectors(e.id, 7, e.finpow() * 30.0, e.rotation, 70.0, hj);
});

const thorSmoke = new Effect(75, e => {
	Draw.color(Pal.redLight);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 4;
    
      Fill.circle(e.x + x, e.y + y, rad);
	}});

  Angles.randLenVectors(e.id, 9, e.fin(Interp.pow10Out) * 40.0, e.rotation, 90.0, hj);
});

const thorBullet = extend(ShrapnelBulletType, {
	damage: 300,
  toColor: Pal.redLight,
  shootEffect: thorShoot,
  smokeEffect: thorSmoke,
  length: brange,
  ammoMultiplier: 5,
  reloadMultiplier: 1.6
});

const gartShoot = new Effect(37, e => {
	Draw.color(Color.white, Pal.thoriumPink, e.fin());
	Lines.stroke(e.fout() * 2.5)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 8);
	}});

  Angles.randLenVectors(e.id, 9, e.finpow() * 45.0, e.rotation, 65.0, hj);
});

const gartSmoke = new Effect(75, e => {
	Draw.color(Pal.thoriumPink);

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 4;
    
      Fill.circle(e.x + x, e.y + y, rad);
	}});

  Angles.randLenVectors(e.id, 19, e.fin(Interp.pow10Out) * 45.0, e.rotation, 97.0, hj);
});

const gartBullet = extend(ShrapnelBulletType, {
	damage: 470,
  toColor: Pal.thoriumPink,
  shootEffect: gartShoot,
  smokeEffect: gartSmoke,
  length: brange,
  ammoMultiplier: 4
});

const phaseShoot = new Effect(37, e => {
	Draw.color(Color.white, Color.valueOf("f4ba6e"), e.fin());
	Lines.stroke(e.fout() * 2.5)

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 8);
	}});

  Angles.randLenVectors(e.id, 10, e.finpow() * 50.0, e.rotation, 65.0, hj);
});

const phaseSmoke = new Effect(75, e => {
	Draw.color(Color.valueOf("f4ba6e"));

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
    var rad = e.fout(Interp.pow5Out) * 4;
    
      Fill.circle(e.x + x, e.y + y, rad);
	}});

  Angles.randLenVectors(e.id, 26, e.fin(Interp.pow10Out) * 45.0, e.rotation, 97.0, hj);
});

const phaseBullet = extend(ShrapnelBulletType, {
	damage: 660,
  toColor: Color.valueOf("f4ba6e"),
  shootEffect: phaseShoot,
  smokeEffect: phaseSmoke,
  length: brange,
  ammoMultiplier: 2,
  reloadMultiplier: 0.7
});

const fissure = extend(ItemTurret, "fissure", {});
fissure.range = range;
fissure.ammo(
  Items.thorium, thorBullet,
  items.gartrium, gartBullet,
  Items.phaseFabric, phaseBullet,
);
