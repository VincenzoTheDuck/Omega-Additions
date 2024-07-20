//amount of power per tick * 60 ticks(1 sec.) = 540 units of power in the game per second
var powerProduction = 2;
//for stats
var generationType = Stat.basePowerGeneration;

const windTurbine = extend(PowerGenerator, "wind-turbine", {
	
	//for stats
    setStats(){
        this.super$setStats();
        this.stats.add(generationType, powerProduction * 60, StatUnit.powerSecond);
    },
	
	//for bars
    setBars(){
    this.super$setBars();
        this.addBar("poweroutput", entity => new Bar(
	    () => Core.bundle.format("bar.poweroutput", powerProduction * 60), 
	    () => Pal.powerBar, 
	    () => 1
	));
    },

    baseExplosiveness: 3,
});

//efficiency multiplier 
const productionEfficiency = 1.0;
windTurbine.buildType = () => extend(PowerGenerator.PowerGeneratorBuild, windTurbine, {
	//endowing the block with the ability to produce power
        getPowerProduction(){
            return powerProduction * productionEfficiency;
        }
});
