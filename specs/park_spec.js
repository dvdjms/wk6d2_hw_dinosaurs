const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park

  beforeEach(function () {
    park = new Park('Code Park', 15);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Code Park')
  });

  it('should have a ticket price', function () {
    const actual = park.entryPrice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur("Diplodocus");
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur("Diplodocus", 'carnivore', 40);
    park.addDinosaur("Teradactyl", 'herbivore', 60);
    park.removeDinosaur("Diplodocus", 'carnivore', 40);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 1);
  });


  xit('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur("Diplodocus", 'carnivore', 40);
    park.addDinosaur("Teradactyl", 'herbivore', 60);
    const actual = park.mostVisitors();
    assert.strictEqual(actual, 'Teradactyl')
  });




  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
