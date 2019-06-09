const { Item } = require('./gilded_rose.js');

const MAX_QUALITY = 50;

class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality);
  }

  updateQuality() {
    if (this.quality < MAX_QUALITY) {
      this.quality += 1;
      if (this.sellIn < 0 && this.quality < MAX_QUALITY) {
        this.quality += 1;
      }
    }
    return this.quality;
  }
}
module.exports = {
  AgedBrie,
};
