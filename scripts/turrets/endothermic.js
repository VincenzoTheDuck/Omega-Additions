const exoMissile = extend(MissileUnitType, "exothermic-missile", {
engineLayer: Layer.effect,
});

const exoBullet = extend(BulletType, {
	speed: 0,
  keepVelocity: false,
  spawnUnit: exoMissile
});

const endoMissile = extend(MissileUnitType, "endothermic-missile", {
engineLayer: Layer.effect,
});

const endoBullet = extend(BulletType, {
	speed: 0,
  keepVelocity: false,
  spawnUnit: endoMissile
});

const instability = extend(ItemTurret, "instability", {});
instability.ammo(
Items.pyratite, exoBullet,
  Items.titanium, endoBullet,
);
