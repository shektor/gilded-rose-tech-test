const { AgedBrie } = require('../../src/item-aged-brie.js');

describe('AgedBrie', () => {
  describe('updateQuality', () => {
    it('aged brie increases in quality by 1', () => {
      const agedBrie = new AgedBrie(2, 3);

      expect(agedBrie.updateQuality()).toEqual(4);
    });

    it('aged brie increases in quality by 2 when sellIn negative', () => {
      const agedBrie = new AgedBrie(-2, 3);

      expect(agedBrie.updateQuality()).toEqual(5);
    });

    it('quality cannot go above 50', () => {
      const agedBrie = new AgedBrie(-2, 50);

      expect(agedBrie.updateQuality()).toEqual(50);
    });
  });

  describe('isQualityBelowMax', () => {
    it('returns true if quality is below max', () => {
      const agedBrie = new AgedBrie(10, 49);

      expect(agedBrie.isQualityBelowMax()).toBe(true);
    });

    it('returns false if quality equal or above max', () => {
      const agedBrie = new AgedBrie(10, 50);

      expect(agedBrie.isQualityBelowMax()).toBe(false);
    });
  });

  describe('isSellInNegative', () => {
    it('returns true if sellIn negative', () => {
      const agedBrie = new AgedBrie(-2, 49);

      expect(agedBrie.isSellInNegative()).toBe(true);
    });

    it('returns false if sellIn positive', () => {
      const agedBrie = new AgedBrie(10, 50);

      expect(agedBrie.isSellInNegative()).toBe(false);
    });
  });
});
