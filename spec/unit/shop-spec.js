const { Shop } = require('../../src/gilded_rose.js');

describe('Shop', () => {
  describe('updateQuality', () => {
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

    it('decreases sellIn and quality by 1', () => {
      itemBefore.sellIn = 2;
      itemBefore.quality = 5;

      itemAfter.sellIn = 1;
      itemAfter.quality = 4;

      const items = gildedRose.updateQuality();

      expect(items).toEqual([itemAfter]);
    });

    it('quality is never negative', () => {
      itemBefore.sellIn = 2;
      itemBefore.quality = 0;

      itemAfter.sellIn = 1;
      itemAfter.quality = 0;

      const items = gildedRose.updateQuality();

      expect(items).toEqual([itemAfter]);
    });

    it('quality cannot go above 50', () => {
      itemBefore.name = 'Aged Brie';
      itemBefore.sellIn = 2;
      itemBefore.quality = 50;

      itemAfter.name = 'Aged Brie';
      itemAfter.sellIn = 1;
      itemAfter.quality = 50;

      const items = gildedRose.updateQuality();

      expect(items).toEqual([itemAfter]);
    });

    it('quality degrades -2 when sellIn 0 or negative', () => {
      itemBefore.sellIn = 0;
      itemBefore.quality = 50;

      itemAfter.sellIn = -1;
      itemAfter.quality = 48;

      const items = gildedRose.updateQuality();

      expect(items).toEqual([itemAfter]);
    });
  });
});
