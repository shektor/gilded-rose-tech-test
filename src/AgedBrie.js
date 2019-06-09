const { NormalItem } = require('./NormalItem.js');

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
}
module.exports = {
  AgedBrie,
};
