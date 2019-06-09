const { Shop } = require('../../src/Shop.js');

describe('Shop', () => {
  describe('updateItems', () => {
    it('return updated items', () => {
      const item = jasmine.createSpyObj('item', ['name', 'sellIn', 'quality', 'updateQuality', 'updateSellIn']);
      item.name = 'foo';
      item.sellIn = 1;
      item.quality = 20;
      item.updateQuality.and.returnValue(19);
      item.updateSellIn.and.returnValue(0);

      const gildedRose = new Shop([item]);

      gildedRose.updateItems();

      expect(item.updateSellIn).toHaveBeenCalledWith();
      expect(item.updateQuality).toHaveBeenCalledWith();
    });
  });
});
