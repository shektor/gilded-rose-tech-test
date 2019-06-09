const { AgedBrie } = require('../../src/AgedBrie.js');

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
});
