var prompt = require('prompt'),
    Car = require('./Car.js'),
    Vehicle = require('./Vehicle.js'),
    inherit = require('./inherit.js').inherit;

    //object creation
    // var vehicle = Vehicle.Vehicle,
    //     car = Car.Car;

    // code
    // inherit(car, vehicle);
    var bmw = new Car(),
        audi = new Car();

    //initialization
    audi.init(14, "medium");
    bmw.init('','',1000);

    //get properties
    bmw.getFuelConsumption();
    bmw.getSize();
    bmw.getPrice();

    audi.getFuelConsumption();
    audi.getSize();
    console.log(audi.wheels);


