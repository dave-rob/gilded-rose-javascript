import { AgedItem, ConjuredItem, Item, LegendaryItem, TicketItem } from "./utils/items";

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new AgedItem("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new TicketItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
    for(let item of items){
      item.nextDay()
    }
  };