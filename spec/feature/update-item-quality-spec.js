const { Shop, Item } = require('../../src/gilded_rose.js');

describe('Gilded Rose', () => {
  it('updates the quality of items each day', () => {
    const itemOne = new Item('foo', 5, 0);
    const itemTwo = new Item('bar', 20, 10);

    const itemArray = [itemOne, itemTwo];

    const gildedRose = new Shop(itemArray);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('foo');
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(0);
    expect(items[1].name).toEqual('bar');
    expect(items[1].sellIn).toEqual(19);
    expect(items[1].quality).toEqual(9);
  });
});