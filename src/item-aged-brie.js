const { Item } = require('./gilded_rose.js');

const MAX_QUALITY = 50;

class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality);
  }

  updateQuality() {
    if (this.qualityBelowMax()) {
      this.quality += 1;
    }
    if (this.sellIn < 0 && this.qualityBelowMax()) {
      this.quality += 1;
    }
    return this.quality;
  }

  qualityBelowMax() {
    if (this.quality < MAX_QUALITY) {
      return true;
    }
    return false;
  }
}
module.exports = {
  AgedBrie,
};
