const combustionArray = extend(ConsumeGenerator, "combustion-array", {});
combustionArray.consume(new ConsumeItemFlammable());
combustionArray.consume(new ConsumeItemExplode());

const cascadiaGenerator = extend(ConsumeGenerator, "cascadia-generator", {});

const fluxGenerator = extend(ConsumeGenerator, "flux-generator", {});

const arcReactor = extend(ImpactReactor, "arc-reactor", {});

const cascadeCollider = extend(ImpactReactor, "cascade-collider", {});

const hydrogenCombustionChamber = extend(ConsumeGenerator, "hydrogen-combustion-chamber", {});
