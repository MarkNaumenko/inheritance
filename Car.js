var inherit = require('./inherit.js'),
	Vehicle = require('./Vehicle.js');

var Car = function Car () {
    this.fuelConsumption = null;
    this.size = null;
    this.wheels = 4;

};

inherit(Car, Vehicle);

module.exports = Car;