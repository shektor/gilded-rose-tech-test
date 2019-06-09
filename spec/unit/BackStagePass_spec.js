const { BackStagePass } = require('../../src/BackStagePass.js');

describe('BackStagePass', () => {
  describe('updateQuality', () => {
    it('quality cannot go above 50', () => {
      const backStagePass = new BackStagePass(2, 50);

      expect(backStagePass.updateQuality()).toEqual(50);
    });

    it('increases in quality by 1 when sellIn above 10', () => {
      const backStagePass = new BackStagePass(11, 20);

      expect(backStagePass.updateQuality()).toEqual(21);
    });

    it('increases in quality by 2 when sellIn 10 or less', () => {
      const backStagePass = new BackStagePass(10, 20);

      expect(backStagePass.updateQuality()).toEqual(22);
    });

    it('increases in quality by 3 when sellIn 5 or less', () => {
      const backStagePass = new BackStagePass(5, 40);

      expect(backStagePass.updateQuality()).toEqual(43);
    });

    it('backstage passes drop to 0 quality if sellIn is less than 0', () => {
      const backStagePass = new BackStagePass(-1, 29);

      expect(backStagePass.updateQuality()).toEqual(0);
    });
  });
});
