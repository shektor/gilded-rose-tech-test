class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateItems() {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === 'Aged Brie'
        || this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'
        || this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        this.items[i].updateQuality();
      } else {
        this.items[i].quality = this.updateQuality(this.items[i]);
      }
      this.items[i].sellIn = this.updateSellIn(this.items[i]);
    }
    return this.items;
  }

  updateQuality({ name, sellIn, quality }) {
    let qualityUpdate = quality;

    if (qualityUpdate > 0 && name !== 'Sulfuras, Hand of Ragnaros') {
      qualityUpdate -= 1;
    }
    if (sellIn < 0 && qualityUpdate > 0 && name !== 'Sulfuras, Hand of Ragnaros') {
      qualityUpdate -= 1;
    }
    return qualityUpdate;
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
