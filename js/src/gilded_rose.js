function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function updateQuality(itemIndex, qualityChange) {
  items[itemIndex].quality += qualityChange;
  if(items[itemIndex].quality < 0) items[itemIndex].quality = 0;
  if(items[itemIndex].quality > 50) items[itemIndex].quality = 50;
}

function getTicketPriceChange(itemIndex) {
  if(items[itemIndex].sell_in <= 0) return -items[itemIndex].quality;
  else if(items[itemIndex].sell_in <= 5 ) return 3;
  else if(items[itemIndex].sell_in <= 10) return 2;
  return 1;
}

function updateItems() {
  for(var i = 0; i < items.length; i++) {
    let qualityChange = -1

    if(items[i].name == 'Sulfuras, Hand of Ragnaros') continue;
    else if (items[i].name == 'Aged Brie') qualityChange = 1;
    else if (items[i].name.startsWith('Backstage passes')) qualityChange = getTicketPriceChange(i);
    else if (items[i].name.startsWith('Conjured')) qualityChange = -2;

  

    if(items[i].sell_in < 0) {
      qualityChange = qualityChange * 2;
    }
    
    items[i].sell_in--;

    updateQuality(i, qualityChange);
  }
}