var Vehicle = function () {
    this.fuelConsumption = 0;
};

Vehicle.prototype = {

    price: 0,
    
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