const missile = extend(MissileUnitType, "decomposition-missile", {
engineLayer: Layer.effect,
});

const bullet = extend(BulletType, {
	speed: 0,
  keepVelocity: false,
  spawnUnit: missile
});

const decomposition = extend(ItemTurret, "decomposition", {});
decomposition.ammo(
  Items.plastanium, bullet
);
