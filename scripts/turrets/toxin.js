const items = require("items/items");

const missile = extend(MissileUnitType, "toxin-missile", {});

const bullet = extend(BulletType, {
	speed: 0,
  keepVelocity: false,
  spawnUnit: missile
});

const toxin = extend(ItemTurret, "toxin", {});
toxin.ammo(
  items.gartrium, bullet
);
