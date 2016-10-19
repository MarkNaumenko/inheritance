var inherit = require('./inherit.js'),
	Vehicle = require('./vehicle.js');

var Car = function (fuelConsumption, size, price) {
	this.fuelConsumption = fuelConsumption || '0';
    this.size = size || "a";
    this.price = price || 10000;
};

inherit(Car, Vehicle);

module.exports = Car;