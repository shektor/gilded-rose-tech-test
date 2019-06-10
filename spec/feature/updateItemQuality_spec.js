const { Shop } = require('../../src/Shop.js');
const { NormalItem } = require('../../src/NormalItem.js');
const { AgedBrie } = require('../../src/AgedBrie.js');
const { BackStagePass } = require('../../src/BackStagePass.js');
const { Sulfuras } = require('../../src/Sulfuras.js');
const { Conjured } = require('../../src/Conjured.js');

describe('Gilded Rose', () => {
  it('updates the quality of items each day', () => {
    const itemOne = new NormalItem('foo', 5, 0);
    const itemTwo = new NormalItem('bar', 20, 10);

    const itemArray = [itemOne, itemTwo];

    const gildedRose = new Shop(itemArray);
    const items = gildedRose.updateItems();

    expect(items[0].name).toEqual('foo');
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(0);
    expect(items[1].name).toEqual('bar');
    expect(items[1].sellIn).toEqual(19);
    expect(items[1].quality).toEqual(9);
  });

  it('updates the quality of Aged Brie each day', () => {
    const agedBrie = new AgedBrie(10, 10);

    const itemArray = [agedBrie];

    const gildedRose = new Shop(itemArray);
    const items = gildedRose.updateItems();

    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(11);
  });

  it('updates the quality of Backstage Pass each day', () => {
    const backStagePass = new BackStagePass(2, 30);

    const itemArray = [backStagePass];

    const gildedRose = new Shop(itemArray);
    const items = gildedRose.updateItems();

    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toEqual(1);
    expect(items[0].quality).toEqual(33);
  });

  it('updates the quality of Sulfuras each day', () => {
    const sulfuras = new Sulfuras(40, 40);

    const itemArray = [sulfuras];

    const gildedRose = new Shop(itemArray);
    const items = gildedRose.updateItems();

    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toEqual(40);
    expect(items[0].quality).toEqual(40);
  });

  it('updates the quality of Conjured each day', () => {
    const conjured = new Conjured(40, 40);

    const itemArray = [conjured];

    const gildedRose = new Shop(itemArray);
    const items = gildedRose.updateItems();

    expect(items[0].name).toEqual('Conjured');
    expect(items[0].sellIn).toEqual(39);
    expect(items[0].quality).toEqual(38);
  });
});
