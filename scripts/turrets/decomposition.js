const items = require("items/items");

const missile = extend(MissileUnitType, "decomposition-missile", {});

const bullet = extend(BulletType, {
	speed: 0,
  keepVelocity: false,
  spawnUnit: missile
});

const decomposition = extend(ItemTurret, "decomposition", {});
decomposition.ammo(
  items.izomite, bullet
);
