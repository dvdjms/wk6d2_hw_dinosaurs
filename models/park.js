const Park = function (name, entryPrice) {
    this.name = name;
    this.entryPrice = entryPrice;
    this.dinosaurCollection = [];
  }

  Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur)
  }

  Park.prototype.removeDinosaur = function (dinosaur) {
    this.dinosaurCollection.pop(dinosaur)
  }

  Park.prototype.mostVisitors = function () {
    // for (i = 0; i < this.dinosaurCollection.length; i++) {
        
    //     most = this.dinosaurCollection.dinosaur.guestsAttractedPerDay
    //     if (this.dinosaurCollection.dinosaur.guestsAttractedPerDay == most) {
    //         speciesWithMostVistister = this.dinosaurCollection.name
    //     }
    // return speciesWithMostVistister
    // }
  
}

  
 









  module.exports = Park;