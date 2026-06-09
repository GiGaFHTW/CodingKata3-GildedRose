describe("Gilded Rose", function() {

  it("normal item degrades quality by 1", function() {
    items = [ new Item("Normal Item", 10, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(19);
  });

  it("normal item decreases sell in by 1", function() {
    items = [ new Item("Normal Item", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
  });

  it("normal item degrades in quality 2x after sell in date", function() {
    items = [ new Item("Normal Item", 0, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(8);
  });

  it("quality is never negative", function() {
    items = [ new Item("Normal Item", 10, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("aged brie increases quality by 1", function() {
    items = [ new Item("Aged Brie", 10, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(21);
  });

  it("aged brie increases quality by 2x after sell in date", function() {
    items = [ new Item("Aged Brie", 0, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(22);
  });

  it("the quality of an item is never more then 50", function() {
    items = [ new Item("Aged Brie", 0, 49) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("Sulfuras never decreases in Quality", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 5, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

  it("Sulfuras never has to be sold", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 5, 80) ];
    update_quality();
    expect(items[0].sell_in).toEqual(5)
  });

  it("backstage pass increases quality by 1 when sell_in > 10", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(21);
  });

});
