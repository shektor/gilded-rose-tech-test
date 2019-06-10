# Gilded Rose Tech Test

A Makers tech test challenge.

## Specification

This is a well known kata developed by [Terry Hughes](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/). Legacy code translated by [Emily Bache](https://github.com/emilybache/GildedRose-Refactoring-Kata/).

“Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

* Once the sell by date has passed, Quality degrades twice as fast
* The Quality of an item is never negative
* “Aged Brie” actually increases in Quality the older it gets
* The Quality of an item is never more than 50
* “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
* “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* “Conjured” items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you).”

## Getting started

```bash
> git clone git@github.com:shektor/gilded-rose-tech-test.git
> cd gilded-rose-tech-test
> npm install
```

## Running tests

Includes test coverage and code linting

```bash
> npm test
```

## How to use

```bash
➜ gilded-rose-tech-test% node
> const NormalItem = require('./src/NormalItem.js');
> const AgedBrie = require('./src/AgedBrie.js');
> const BackStagePass = require('./src/BackStagePass.js');
> const Sulfuras = require('./src/Sulfuras.js');
> const Conjured = require('./src/Conjured.js');
> const Shop = require('./src/Shop.js')
>
> const worthless = new NormalItem('Worthless', 5, 0);
> const agedBrie = new AgedBrie(10, 10);
> const backStagePass = new BackStagePass(6, 30);
> const sulfuras = new Sulfuras(0, 0);
> const conjured = new Conjured(-5, 10);
>
> const itemArray = [worthless, agedBrie, backStagePass, sulfuras, conjured];
> const gildedRose = new Shop(itemArray)
>
> gildedRose
Shop {
  items:
   [ NormalItem { name: 'Worthless', sellIn: 5, quality: 0 },
     AgedBrie { name: 'Aged Brie', sellIn: 10, quality: 10 },
     BackStagePass {
       name: 'Backstage passes to a TAFKAL80ETC concert',
       sellIn: 6,
       quality: 30 },
     Sulfuras { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 0 },
     Conjured { name: 'Conjured', sellIn: -5, quality: 10 } ] }
>
> gildedRose.updateItems()
[ NormalItem { name: 'Worthless', sellIn: 4, quality: 0 },
  AgedBrie { name: 'Aged Brie', sellIn: 9, quality: 11 },
  BackStagePass {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 5,
    quality: 32 },
  Sulfuras { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 0 },
  Conjured { name: 'Conjured', sellIn: -6, quality: 6 } ]
```

## Approach

- Understand program behaviour and how it executes, evaluating program description and provided code.
- Create feature tests and unit tests for existing behaviour.
- When creating tests, first write a failing test, before creating a green test.
- Look for edge cases, for example ‘aged brie’ increasing in quality by 2 when sellIn negative.
- Refactor code while keeping all tests green, using concepts like ‘single responsibility’ and ‘open for extension, closed for modification’.
