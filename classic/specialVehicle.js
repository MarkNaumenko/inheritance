var inherit = require('./inherit.js'),
	Vehicle = require('./vehicle.js');

var SpecialVehicle = function () {
    this.specialization = null;
    this.size = null;
    this.wheels = 4;
};

inherit(SpecialVehicle, Vehicle);

module.exports = SpecialVehicle;