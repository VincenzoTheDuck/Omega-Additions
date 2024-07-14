const missile = extend(MissileUnitType, "dissolve-missile", {
engineLayer: Layer.effect,
});

const bullet = extend(BulletType, {
	speed: 0,
  keepVelocity: false,
  spawnUnit: missile
});

const dissolve = extend(ItemTurret, "dissolve", {});
dissolve.ammo(
  Items.plastanium, bullet
);
