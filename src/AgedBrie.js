const { NormalItem } = require('./NormalItem.js');

const MAX_QUALITY = 50;

class AgedBrie extends NormalItem {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality);
  }

  updateQuality() {
    if (this.isQualityBelowMax()) {
      this.quality += 1;
    }
    if (this.isSellInNegative() && this.isQualityBelowMax()) {
      this.quality += 1;
    }
    return this.quality;
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
}
module.exports = {
  AgedBrie,
};
