const { Item } = require('./Item.js');

class Sulfuras extends Item {
  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality);
  }

  updateQuality() {
    return this.quality;
  }
}
module.exports = {
  Sulfuras,
};
