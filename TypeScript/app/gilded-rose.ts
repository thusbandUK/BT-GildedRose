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
      //This decrements sellIn for everything but Sulfuras - which never ages - and backstage passes, which decrements within below function
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      switch(this.items[i].name){
        case 'Aged Brie':
          //Adds 1 to quality
          this.items[i].quality = this.items[i].quality + 1;
          //Adds an additional 1 to quality past the sell by date
          if (this.items[i].sellIn < 0){
            this.items[i].quality ++;
          }
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          //Assigns value of 3, 2 or 1 to add to quality depending on sellIn
          let addedQuality = 0;
          if (this.items[i].sellIn < 6){
            addedQuality = 3;
          } else if (this.items[i].sellIn < 11) {
            addedQuality = 2;
          } else {
            addedQuality = 1;
          }
          //add assigned value to quality
          this.items[i].quality = this.items[i].quality + addedQuality;
                    
          //decrements sellIn
          this.items[i].sellIn = this.items[i].sellIn - 1;
          if (this.items[i].sellIn < 0){
            this.items[i].quality = 0;
          }
          break;
        case 'Sulfuras, Hand of Ragnaros':
          //no code required as no changes ever made to Sulfuras
          break;
        default:
          //assigns minimum loss to quality of 1 to variable decreasedValue
          let decreasedValue = 1;
          //if sell by date passed, loss to quality is doubled
          if (this.items[i].sellIn < 0){
            decreasedValue++;
          }
          //If item is conjured, loss to quality is doubled
          if (this.items[i].name.includes('Conjured')){
            decreasedValue = decreasedValue * 2;
          }
          //reduces quality by decreasedValue to a threshold of 0
          this.items[i].quality = ((this.items[i].quality >= decreasedValue) ? this.items[i].quality - decreasedValue : 0);
          
          break;

      }
      //caps quality at 50 for Aged Brie and backstage passes
      if (this.items[i].quality > 50 && this.items[i].quality < 80) {
        this.items[i].quality = 50;
      }
      
    }

    return this.items;
  }
}
