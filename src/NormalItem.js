const { Item } = require('./Item.js');

const MAX_QUALITY = 50;

class NormalItem extends Item {
  updateQuality() {
    if (this.isQualityPositive()) {
      this.quality -= 1;
    }
    if (this.isSellInNegative() && this.isQualityPositive()) {
      this.quality -= 1;
    }

    return this.quality;
  }

  updateSellIn() {
    this.sellIn -= 1;

    return this.sellIn;
  }

  isQualityBelowMax() {
    if (this.quality < MAX_QUALITY) {
      return true;
    }
    return false;
  }

  isSellInNegative() {
    if (this.sellIn < 0) {
      return true;
    }
    return false;
  }

  isQualityPositive() {
    if (this.quality > 0) {
      return true;
    }
    return false;
  }
}
module.exports = {
  NormalItem,
};
