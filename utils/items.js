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
    nextDay(){
      super.nextDay(-1)
    }
}

export class LegendaryItem extends Item{
  nextDay(){
    //do nothing
  }
}

export class TicketItem extends Item{
  nextDay(){
    if(this.sellIn < 0){
      this.quality=0
      this.sellIn -=1
    } else if (this.sellIn <= 5){
      super.nextDay(-3)
    } else if (this.sellIn <=10){
      super.nextDay(-2)
    } else{
      super.nextDay(-1)
    }
  }
}

export class ConjuredItem extends Item{
  nextDay(){
    super.nextDay(2)
  }
}