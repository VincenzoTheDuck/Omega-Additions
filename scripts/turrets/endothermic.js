const missile = extend(MissileUnitType, "endothermic-missile", {
engineLayer: Layer.effect,
});

const bullet = extend(BulletType, {
	speed: 0,
  keepVelocity: false,
  spawnUnit: missile
});

const endothermic = extend(ItemTurret, "endothermic", {});
endothermic.ammo(
  Items.titanium, bullet
);
