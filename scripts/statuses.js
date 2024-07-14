const dissolvingEffect = new Effect(33, e => {
	Draw.color(Color.valueOf("73d188"));

  const hj = new Floatc2({get: function(x, y){
		var ang = Mathf.angle(x, y);
      Fill.circle(e.x + x, e.y + y, e.fout() * 3.5);
	}});

  Angles.randLenVectors(e.id, 4, e.finpow() * 13.0, e.rotation, 360.0, hj);
});

const dissolving = extend(StatusEffect, "dissolving", {    
    init(){
        this.opposite(StatusEffects.wet);
    },
    effect: dissolvingEffect
})
