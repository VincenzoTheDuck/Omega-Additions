const missile = extend(MissileUnitType, "exothermic-missile", {
engineLayer: Layer.effect,
});

const bullet = extend(BulletType, {
	speed: 0,
  keepVelocity: false,
  spawnUnit: missile
});

const exothermic = extend(ItemTurret, "exothermic", {});
redox.ammo(
  Items.pyratite, bullet
);
