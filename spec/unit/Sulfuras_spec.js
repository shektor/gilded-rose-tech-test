const { Sulfuras } = require('../../src/Sulfuras.js');

describe('Sulfuras', () => {
  describe('updateQuality', () => {
    it('never decreases in quality with positive sellIn', () => {
      const sulfuras = new Sulfuras(2, 3);

      expect(sulfuras.updateQuality()).toEqual(3);
    });

    it('never decreases in quality with negative sellIn', () => {
      const sulfuras = new Sulfuras(-2, 3);

      expect(sulfuras.updateQuality()).toEqual(3);
    });
  });

  describe('updateSellIn', () => {
    it('never decreases', () => {
      const sulfuras = new Sulfuras(5, 10);

      expect(sulfuras.updateSellIn()).toEqual(5);
    });
  });
});
