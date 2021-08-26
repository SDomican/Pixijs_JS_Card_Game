console.log('Accessing Deck.js')

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Deck{
  
  constructor() {
    this.selectedCards = [];
  }

  
  drawCard(){

    while(true){

      let randomNumber = Math.floor((Math.random() * 10) + 1);

      if(this.selectedCards.includes(randomNumber)){
        continue;  
      }

      this.selectedCards.push(randomNumber);
      return randomNumber;
    }
    
  }

  resetDeck(){
    this.selectedCards = arr.splice(0, arr.length);
  }
  
}