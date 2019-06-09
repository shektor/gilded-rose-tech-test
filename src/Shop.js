class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateItems() {
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].updateQuality();
      this.items[i].sellIn = this.updateSellIn(this.items[i]);
    }
    return this.items;
  }

  updateSellIn({ name, sellIn }) {
    let sellInUpdate = sellIn;

    if (name !== 'Sulfuras, Hand of Ragnaros') {
      sellInUpdate -= 1;
    }

    return sellInUpdate;
  }
}
module.exports = {
  Shop,
};
