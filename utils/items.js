export class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }

    nextDay(multiplier = 1){
      if(this.sellIn >=0){
        this.sellIn -=1
        this.quality -=1 * multiplier
      } else{
        this.sellIn -= 1
        this.quality -=2 * multiplier
      }
      this.quality = Math.min(this.quality, 50)
      this.quality = Math.max(this.quality, 0)
    }
  }

export class AgedItem extends Item{
    constructor(name, sellIn, quality){
      super(name, sellIn, quality)
    }

    nextDay(){
      super.nextDay(-1)
    }
}

export class LegendaryItem extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  nextDay(){
    //do nothing
  }
}