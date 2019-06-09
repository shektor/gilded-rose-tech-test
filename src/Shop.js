class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateItems() {
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].updateQuality();
      this.items[i].updateSellIn();
    }
    return this.items;
  }
}
module.exports = {
  Shop,
};
