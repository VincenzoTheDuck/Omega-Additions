const terraliteAlloy = extend(Item, "terralite-alloy", {});

Items.serpuloItems.addAll(Items.scrap, Items.copper, Items.lead, Items.graphite, Items.coal, Items.titanium, Items.thorium,
Items.silicon, Items.plastanium, Items.surgeAlloy, Items.sporePod, Items.phaseFabric, Items.sand, Items.blastCompound, Items.pyratite, Items.metaglass,
terraliteAlloy);

module.exports = {
terraliteAlloy: terraliteAlloy,
}
