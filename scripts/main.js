require("items");
require("liquids");
require("units");
require("production");
require("unitBlocks");

// turrets
require("turrets/shotgun-i");
require("turrets/shotgun-ii");
require("turrets/radius");
require("turrets/linear");
const corrode = extend(LiquidTurret, "corrode", {});
const reactant = extend(LiquidTurret, "reactant", {});
require("turrets/collapse");
