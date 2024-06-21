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
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          //backstage passes code
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
      //nested if set 1 - reduces quality by 1 of everything but aged brie, backstage passes and sulfuras, provided quality > 0
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        /*if (this.items[i].quality > 0) {          
          this.items[i].quality = this.items[i].quality - 1
        }*/
      } else {
        if (this.items[i].quality < 50) {
          //this adds 1 to all the quality increasing products
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            //this adds one
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
              //this.items[i].quality = this.items[i].quality + 1
            }
            //this adds another 1 as quality increases faster (upto a ceiling of 50)
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
              //this.items[i].quality = this.items[i].quality + 1
            }
          }
        }
      }
      //having assigned the quality this reduces sellin by 1 for everything except sulfuras
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
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
        } else {
          //this increases the quality of brie by 1 upto a threshold of 50
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }
}
