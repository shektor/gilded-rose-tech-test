class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateItems() {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === 'Aged Brie' || this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
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

    if (name !== 'Backstage passes to a TAFKAL80ETC concert') {
      if (qualityUpdate > 0 && name !== 'Sulfuras, Hand of Ragnaros') {
        qualityUpdate -= 1;
      }
    } else if (qualityUpdate < 50) {
      qualityUpdate += 1;
      if (name === 'Backstage passes to a TAFKAL80ETC concert' && sellIn < 11 && qualityUpdate < 50) {
        qualityUpdate += 1;
      }
      if (name === 'Backstage passes to a TAFKAL80ETC concert' && sellIn < 6 && qualityUpdate < 50) {
        qualityUpdate += 1;
      }
    }
    if (sellIn < 0) {
      if (name !== 'Backstage passes to a TAFKAL80ETC concert') {
        if (qualityUpdate > 0 && name !== 'Sulfuras, Hand of Ragnaros') {
          qualityUpdate -= 1;
        }
      } else {
        qualityUpdate -= qualityUpdate;
      }
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
  Item,
  Shop,
};
