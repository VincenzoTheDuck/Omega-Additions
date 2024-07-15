const bullet = extend(PointLaserBulletType, {
	damage: 300,
	buildingDamageMultiplier: 0.2,
  hitColor: Color.valueOf("fc8e6c"),
  sprite: "red-point-laser"
});

const glow = extend(ContinuousTurret, "glow", {});
glow.shootCone = 360;
glow.shootType = bullet
