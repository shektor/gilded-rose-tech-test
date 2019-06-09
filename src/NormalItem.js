const { Item } = require('./Item.js');

class NormalItem extends Item {
  updateQuality() {
    if (this.quality > 0) {
      this.quality -= 1;
    }
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 1;
    }

    return this.quality;
  }

  updateSellIn() {
    this.sellIn -= 1;

    return this.sellIn;
  }
}
module.exports = {
  NormalItem,
};
