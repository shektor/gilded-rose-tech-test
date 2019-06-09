const { NormalItem } = require('./NormalItem.js');

const INCREASE_QUALITY_MARK_ONE = 11;
const INCREASE_QUALITY_MARK_TWO = 6;

class BackStagePass extends NormalItem {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
  }

  updateQuality() {
    if (this.isQualityBelowMax()) {
      this.quality += 1;
    }
    if (this.isSellInLessThen(INCREASE_QUALITY_MARK_ONE) && this.isQualityBelowMax()) {
      this.quality += 1;
    }
    if (this.isSellInLessThen(INCREASE_QUALITY_MARK_TWO) && this.isQualityBelowMax()) {
      this.quality += 1;
    }
    if (this.isSellInNegative()) {
      this.quality -= this.quality;
    }
    return this.quality;
  }

  isSellInLessThen(value) {
    if (this.sellIn < value) {
      return true;
    }
    return false;
  }
}
module.exports = {
  BackStagePass,
};
