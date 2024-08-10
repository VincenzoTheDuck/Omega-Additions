const twinkle = extend(UnitType, "twinkle", {});
twinkle.constructor = () => extend(UnitEntity, {});

const starlight = extend(UnitType, "starlight", {});
starlight.constructor = () => extend(UnitEntity, {});

const edge = extend(UnitType, "edge", {});
edge.constructor = () => extend(UnitWaterMove, {});
