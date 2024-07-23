require("items/items");
require("statuses");
require("items/liquids");
require("units");
require("production");
require("unitBlocks");
require("storage");
require("power");
require("environment");

// turrets
require("turrets/shotgun-i");
require("turrets/shotgun-ii");
require("turrets/arc-ii");
require("turrets/shockgun");
require("turrets/radius");
require("turrets/linear");
//TODO improve corrode and reactant
const corrode = extend(LiquidTurret, "corrode", {});
const reactant = extend(LiquidTurret, "reactant", {});
require("turrets/ester");
require("turrets/dissolve");
require("turrets/redox");
//TODO merge exothermic and endothermic into a single turret and add plastanium as an ammo type
require("turrets/exothermic");
require("turrets/endothermic");
require("turrets/decomposition");
require("turrets/collapse");
require("turrets/glow");
require("turrets/sparkle");
require("turrets/cut");
require("turrets/strike");
require("turrets/barrage");
require("turrets/excalibur");
