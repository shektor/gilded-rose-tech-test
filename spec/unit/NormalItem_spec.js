const { NormalItem } = require('../../src/NormalItem.js');

describe('NormalItem', () => {
  describe('updateQuality', () => {
    it('decreases quality', () => {
      const normalItem = new NormalItem('foof', 12, 3);

      expect(normalItem.updateQuality()).toEqual(2);
    });

    it('quality is never negative', () => {
      const normalItem = new NormalItem('foof', 12, 0);

      expect(normalItem.updateQuality()).toEqual(0);
    });

    it('quality degrades -2 when sellIn negative', () => {
      const normalItem = new NormalItem('foof', -1, 20);

      expect(normalItem.updateQuality()).toEqual(18);
    });
  });

  describe('updateSellIn', () => {
    it('decreases sellIn by 1', () => {
      const normalItem = new NormalItem('boof', 4, 20);

      expect(normalItem.updateSellIn()).toEqual(3);
    });
  });

  describe('isQualityBelowMax', () => {
    it('returns true if quality is below max', () => {
      const normalItem = new NormalItem('boof', 10, 49);

      expect(normalItem.isQualityBelowMax()).toBe(true);
    });

    it('returns false if quality equal or above max', () => {
      const normalItem = new NormalItem('boof', 10, 50);

      expect(normalItem.isQualityBelowMax()).toBe(false);
    });
  });

  describe('isSellInNegative', () => {
    it('returns true if sellIn negative', () => {
      const normalItem = new NormalItem('boof', -2, 49);

      expect(normalItem.isSellInNegative()).toBe(true);
    });

    it('returns false if sellIn positive', () => {
      const normalItem = new NormalItem('boof', 10, 50);

      expect(normalItem.isSellInNegative()).toBe(false);
    });
  });

  describe('isQualityPositive', () => {
    it('returns true if quality positive', () => {
      const normalItem = new NormalItem('boof', -2, 49);

      expect(normalItem.isQualityPositive()).toBe(true);
    });

    it('returns false if quality negative', () => {
      const normalItem = new NormalItem('boof', 10, -3);

      expect(normalItem.isQualityPositive()).toBe(false);
    });
  });
});
