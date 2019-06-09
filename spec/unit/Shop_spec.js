const { Shop } = require('../../src/Shop.js');

describe('Shop', () => {
  let itemBefore;
  let itemAfter;
  let gildedRose;

  beforeEach(() => {
    itemBefore = jasmine.createSpyObj('item', ['name', 'sellIn', 'quality']);
    itemBefore.name = 'foo';
    itemBefore.sellIn = 0;
    itemBefore.quality = 0;

    itemAfter = jasmine.createSpyObj('item', ['name', 'sellIn', 'quality']);
    itemAfter.name = 'foo';
    itemAfter.sellIn = 0;
    itemAfter.quality = 0;

    gildedRose = new Shop([itemBefore]);
  });

  describe('updateItems', () => {
    it('decreases quality and sellIn by 1', () => {
      itemBefore.sellIn = 2;
      itemBefore.quality = 5;

      itemAfter.sellIn = 1;
      itemAfter.quality = 4;

      const items = gildedRose.updateItems();

      expect(items).toEqual([itemAfter]);
    });

    it('quality is never negative', () => {
      itemBefore.sellIn = 2;
      itemBefore.quality = 0;

      itemAfter.sellIn = 1;
      itemAfter.quality = 0;

      const items = gildedRose.updateItems();

      expect(items).toEqual([itemAfter]);
    });

    it('quality degrades -2 when sellIn negative', () => {
      itemBefore.sellIn = -1;
      itemBefore.quality = 50;

      itemAfter.sellIn = -2;
      itemAfter.quality = 48;

      const items = gildedRose.updateItems();

      expect(items).toEqual([itemAfter]);
    });
  });
});
