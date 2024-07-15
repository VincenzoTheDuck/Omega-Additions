const bullet = extend(BasicBulletType, {
	damage: 45,
	lightningLength: 50,
  collidesAir: false,
  ammoMultiplier: 1
});

const arcII = extend(ItemTurret, "arc-ii", {});
arcII.range = 180;
arcII.inaccuracy = 5;
arcII.shootCone = 8;
arcII.shoot.shots = 6;
arcII.shootType = bullet
