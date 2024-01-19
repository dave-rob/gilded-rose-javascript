import { expect, describe, it } from "vitest";
import { AgedItem, ConjuredItem, Item, LegendaryItem, TicketItem } from "./utils/items.js";
import { items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it("reduces quality twice as fast when sell is less than 0", () => {
    const testItem = new Item("basic", -1, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(1);
    expect(testItem.sellIn).toBe(-2);
  });

  it("quality is never less than 0", () => {
    const testItem = new Item("basic", -1, 1);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-2);
  });

  it("quality increases with 'Aged Brie'", () => {
    const testItem = new AgedItem("Aged Brie", -5, 20);
    const testItem2 = new AgedItem("Aged Brie", 3, 15);
    items.push(testItem);
    items.push(testItem2);

    updateQuality();

    expect(testItem.quality).toBe(22);
    expect(testItem.sellIn).toBe(-6);

    expect(testItem2.quality).toBe(16);
    expect(testItem2.sellIn).toBe(2);
  });

  it("quality doesn't increase above 50", () => {
    const testItem = new AgedItem("Aged Brie", -10,49);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(-11);
  });

  it("'Sulfuras, Hand of Ragnaros' doesn't decrease in quality", () => {
    const testItem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 0,80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(0);
  });

  
});

describe("Backstage Passes Handling",() =>{
  it("'Backstage passes to a TAFKAL80ETC concert' increase in quality by one  if over 10 days", () => {
    const testItem = new TicketItem('Backstage passes to a TAFKAL80ETC concert', 11,12);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(13);
    expect(testItem.sellIn).toBe(10);
  });

  it("'Backstage passes to a TAFKAL80ETC concert' increase in quality by 2 when 10days or less", () => {
    const testItem = new TicketItem('Backstage passes to a TAFKAL80ETC concert', 10,12);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(14);
    expect(testItem.sellIn).toBe(9);
  });
  
  it("'Backstage passes to a TAFKAL80ETC concert' increase in quality by 3 when 5days or less", () => {
    const testItem = new TicketItem('Backstage passes to a TAFKAL80ETC concert', 5,12);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(15);
    expect(testItem.sellIn).toBe(4);
  });

  it("'Backstage passes to a TAFKAL80ETC concert' drops  to 0 after concert", () => {
    const testItem = new TicketItem('Backstage passes to a TAFKAL80ETC concert', -1,48);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-2);
  });

  it("'Backstage passes to a TAFKAL80ETC concert' doesn't increase above 50", () => {
    const testItem = new TicketItem('Backstage passes to a TAFKAL80ETC concert', 5,49);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(4);
  });

})

describe("Conjured Items",() =>{
  it("'Conjured' items decrease twice as fast", () => {
    const testItem = new ConjuredItem('Conjured baby', 10,49);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(47);
    expect(testItem.sellIn).toBe(9);
  });
  it("'Conjured' items decrease twice as fast and not go below 0", () => {
    const testItem = new ConjuredItem('Conjured baby', -1,3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-2);
  });
})