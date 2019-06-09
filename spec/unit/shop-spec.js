const { Shop } = require('../../src/gilded_rose.js');

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

    it('quality cannot go above 50', () => {
      itemBefore.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemBefore.sellIn = 2;
      itemBefore.quality = 50;

      itemAfter.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemAfter.sellIn = 1;
      itemAfter.quality = 50;

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

    it('sulfras does not decrease in quality or sellIn with negative sellIn', () => {
      itemBefore.name = 'Sulfuras, Hand of Ragnaros';
      itemBefore.sellIn = -1;
      itemBefore.quality = 5;

      itemAfter.name = 'Sulfuras, Hand of Ragnaros';
      itemAfter.sellIn = -1;
      itemAfter.quality = 5;

      const items = gildedRose.updateItems();

      expect(items).toEqual([itemAfter]);
    });

    it('sulfras does not decrease in quality or sellIn with positive sellIn', () => {
      itemBefore.name = 'Sulfuras, Hand of Ragnaros';
      itemBefore.sellIn = 1;
      itemBefore.quality = 50;

      itemAfter.name = 'Sulfuras, Hand of Ragnaros';
      itemAfter.sellIn = 1;
      itemAfter.quality = 50;

      const items = gildedRose.updateItems();

      expect(items).toEqual([itemAfter]);
    });

    it('backstage passes increase in quality by 1 when sellIn above 10', () => {
      itemBefore.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemBefore.sellIn = 11;
      itemBefore.quality = 20;

      itemAfter.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemAfter.sellIn = 10;
      itemAfter.quality = 21;

      const items = gildedRose.updateItems();

      expect(items).toEqual([itemAfter]);
    });

    it('backstage passes increase in quality by 2 when sellIn 10 or less', () => {
      itemBefore.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemBefore.sellIn = 10;
      itemBefore.quality = 20;

      itemAfter.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemAfter.sellIn = 9;
      itemAfter.quality = 22;

      const items = gildedRose.updateItems();

      expect(items).toEqual([itemAfter]);
    });

    it('backstage passes increase in quality by 3 when sellIn 5 or less', () => {
      itemBefore.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemBefore.sellIn = 5;
      itemBefore.quality = 40;

      itemAfter.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemAfter.sellIn = 4;
      itemAfter.quality = 43;

      const items = gildedRose.updateItems();

      expect(items).toEqual([itemAfter]);
    });

    it('backstage passes drop to 0 quality if sellIn is less than 0', () => {
      itemBefore.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemBefore.sellIn = -1;
      itemBefore.quality = 29;

      itemAfter.name = 'Backstage passes to a TAFKAL80ETC concert';
      itemAfter.sellIn = -2;
      itemAfter.quality = 0;

      const items = gildedRose.updateItems();

      expect(items).toEqual([itemAfter]);
    });
  });
});
