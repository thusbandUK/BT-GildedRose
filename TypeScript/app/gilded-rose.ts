export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    

    for (let i = 0; i < this.items.length; i++) {
      

      switch(this.items[i].name){
        case 'Aged Brie':
          //Aged Brie code
          this.items[i].sellIn = this.items[i].sellIn - 1;
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].sellIn < 0){
            this.items[i].quality ++;
          }
          if (this.items[i].quality > 50) {
            this.items[i].quality = 50
          }
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          //backstage passes code
          let addedQuality = 0;
          if (this.items[i].sellIn < 6){
            addedQuality = 3;
          } else if (this.items[i].sellIn < 11) {
            addedQuality = 2;
          } else {
            //this (may arguably) be needed only once the section below marked BACKSTAGE HERE, which adds 1 to *all* quality increasing
            //products, is removed
            addedQuality = 1;
          }
          this.items[i].quality = this.items[i].quality + addedQuality;
          if (this.items[i].quality > 50) {
            this.items[i].quality = 50
          }
          break;
        case 'Sulfuras, Hand of Ragnaros':
          //sulfuras code
          break;
        default:
          if (this.items[i].quality > 0) {          
            this.items[i].quality = this.items[i].quality - 1
          }
          break;

      }
      
      //having assigned the quality this reduces sellin by 1 for everything except sulfuras
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Aged Brie') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      //excepting aged brie, backstage passes and sulfuras, this reduces quality by 1, again (since quality increases twice as fast after sell by date)
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          }
          // this reduces to zero the quality of the backstage passes, once the concert has passed (ie sell by dated passed)
          else {
            //this.items[i].quality = this.items[i].quality - this.items[i].quality
            this.items[i].quality = 0;
          }
        } 
      }
    }

    return this.items;
  }
}
