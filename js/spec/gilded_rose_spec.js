describe("Gilded Rose", function() {

  it("normal item degrades quality by 1", function() {
    items = [ new Item("Normal Item", 10, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(19);
  });

});
