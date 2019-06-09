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
});
