describe("Package", function(){
  describe("scale", function(){
    it("Determines the base price to ship an object using weight", function(){
      var testPackage = Object.create(Package);
      testPackage.weight = 12;
      testPackage.scale().should.equal(25);
    });
  });
  describe('speed', function() {
    it('adds 10 for priority, 30 for express, and 50 for overnight', function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 12;
      testPackage.shipTime = 'Express';
      testPackage.speed().should.equal(55);
    });
  });
  describe('distance', function(){
    it('increases the price by 25% for every 500 miles past the first 500', function(){
      var testPackage = Object.create(Package);
      testPackage.weight = 12;
      testPackage.shipTime = 'Express';
      testPackage.distanceShipped = 1600;
      testPackage.distance().should.equal(96.25)
    });
  });
});
