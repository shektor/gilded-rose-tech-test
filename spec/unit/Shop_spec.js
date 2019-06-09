const { Shop } = require('../../src/Shop.js');

describe('Shop', () => {
  describe('updateItems', () => {
    it('return updated items', () => {
      const item = jasmine.createSpyObj('item', ['name', 'sellIn', 'quality', 'updateQuality']);
      item.name = 'foo';
      item.sellIn = 1;
      item.quality = 20;
      item.updateQuality.and.returnValue(19);

      const gildedRose = new Shop([item]);

      const items = gildedRose.updateItems();

      expect(items[0].sellIn).toEqual(0);
      expect(item.updateQuality).toHaveBeenCalledWith();
    });
  });
});
