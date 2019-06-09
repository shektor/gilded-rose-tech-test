const { NormalItem } = require('./NormalItem.js');

class BackStagePass extends NormalItem {
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
}
module.exports = {
  BackStagePass,
};
