var Package = {
  scale: function() {
    if (this.weight > 0 && this.weight <= 2) {
      return 3;
  } else if (this.weight > 2 && this.weight <= 10) {
      return 15;
  } else if (this.weight > 10 && this.weight <= 50) {
      return 25;
  } else if (this.weight > 50 && this.weight <= 100) {
     return 60;
  } else {
    return 'Invalid';
  }
},
  speed: function() {
    if (this.shipTime === 'Priority') {
      return this.scale(this.weight) + 10;
    } else if (this.shipTime === 'Express') {
      return this.scale(this.weight) + 30;
    } else if (this.shipTime === 'Overnight'){
      return this.scale(this.weight) + 50;
    } else {
      return this.scale(this.weight);
    }
  },
  distance: function() {
    var regions = parseInt(this.distanceShipped / 500);
    var regionFee = regions * .25;
    if (regions < 1) {
       return this.speed();
    } else {
       return this.speed() + (this.speed()*regionFee);
    }
  }
};

$(document).ready(function() {
  $('form#new-package').submit(function(event) {
    event.preventDefault();

    var inputWeight = parseInt($('input#weight').val());
    var inputSpeed = $('#speed').val();
    var inputDistance = parseInt($('input#distance').val());

    var newPackage = Object.create(Package);
    newPackage.weight = inputWeight;
    newPackage.shipTime = inputSpeed;
    newPackage.distanceShipped = inputDistance;

    if (newPackage.distance() !== 'Invalid') {
      $('#show-price h2').text("It will cost $" + newPackage.distance() + " to ship.");
    } else {
        alert('We only ship packages whose weight is less than 100 pounds')
    }
  
  this.reset();
});
});


