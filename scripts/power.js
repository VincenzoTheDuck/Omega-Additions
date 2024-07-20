var powerProduction = 2

const windTurbine = extend(PowerGenerator, "wind-turbine", {});
windTurbine.buildType = () => extend(CoreBlock.CoreBuild, coreCage, {
        getPowerProduction(){
            return powerProduction;
        }
  });
