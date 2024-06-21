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
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      switch(this.items[i].name){
        case 'Aged Brie':
          //Aged Brie code          
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
            addedQuality = 1;
          }
          this.items[i].quality = this.items[i].quality + addedQuality;
          if (this.items[i].quality > 50) {
            this.items[i].quality = 50
          }
          this.items[i].sellIn = this.items[i].sellIn - 1;
          if (this.items[i].sellIn < 0){
            this.items[i].quality = 0;
          }
          break;
        case 'Sulfuras, Hand of Ragnaros':
          //sulfuras code
          break;
        default:
          if (this.items[i].quality > 0) {          
            this.items[i].quality = this.items[i].quality - 1
          }
          if (this.items[i].quality > 0 && this.items[i].sellIn < 0) {          
            this.items[i].quality = this.items[i].quality - 1
          }
          break;

      }      
    }

    return this.items;
  }
}
