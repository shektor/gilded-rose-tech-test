const { Conjured } = require('../../src/Conjured.js');

describe('Conjured', () => {
  describe('updateQuality', () => {
    it('decreases quality by 2', () => {
      const conjured = new Conjured(12, 3);

      expect(conjured.updateQuality()).toEqual(1);
    });

    it('decreases quality by 4 when sellIn negative', () => {
      const conjured = new Conjured(-1, 20);

      expect(conjured.updateQuality()).toEqual(16);
    });

    it('quality is never negative', () => {
      const conjured = new Conjured(12, 0);

      expect(conjured.updateQuality()).toEqual(0);
    });
  });
});
