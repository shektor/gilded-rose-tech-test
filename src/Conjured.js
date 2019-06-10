const { NormalItem } = require('./NormalItem.js');

class Conjured extends NormalItem {
  constructor(sellIn, quality) {
    super('Conjured', sellIn, quality);
  }

  updateQuality() {
    if (this.isQualityPositive()) {
      this.quality -= 2;
    }
    if (this.isSellInNegative() && this.isQualityPositive()) {
      this.quality -= 2;
    }

    return this.quality;
  }
}
module.exports = {
  Conjured,
};
