var Vehicle = function () {};

Vehicle.prototype = {
    
    init: function (fuelConsumption, size, price) {
        
        this.fuelConsumption = fuelConsumption || 10;
        this.size = size || "offroad";
        this.price = price || 0;
    },
    
    getFuelConsumption: function () {
        console.log(this.fuelConsumption);
    },
    
    getSize: function () {
        var size = this.size;
        console.log("size: " + size);
    },

    getPrice: function () {
        var price = this.price;
        console.log("price: " + price);
    }
};

module.exports = Vehicle;