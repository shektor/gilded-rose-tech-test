const { Item } = require('./Item.js');

const MAX_QUALITY = 50;

class BackStagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
  }

  updateQuality() {
    if (this.isQualityBelowMax()) {
      this.quality += 1;
    }
    if (this.sellIn < 11 && this.isQualityBelowMax()) {
      this.quality += 1;
    }
    if (this.sellIn < 6 && this.isQualityBelowMax()) {
      this.quality += 1;
    }
    if (this.isSellInNegative()) {
      this.quality -= this.quality;
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
  BackStagePass,
};
