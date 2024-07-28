const combustionArray = extend(ConsumeGenerator, "combustion-array", {});
combustionArray.consume(new ConsumeItemFlammable());
combustionArray.consume(new ConsumeItemExplode());

const chargeGen = extend(ConsumeGenerator, "charge-generator", {});
chargeGen.consume(new ConsumeItemCharged());

const differentialArray = extend(ConsumeGenerator, "differential-array", {});

const cascadiaGen = extend(ConsumeGenerator, "cascadia-generator", {});

const fluxGen = extend(ConsumeGenerator, "flux-generator", {});

const arcReactor = extend(ImpactReactor, "arc-reactor", {});

const cascadeCollider = extend(ImpactReactor, "cascade-collider", {});

const hydrogenCombustionChamber = extend(ConsumeGenerator, "hydrogen-combustion-chamber", {});
