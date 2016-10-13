var prompt = require('prompt'),
    Car = require('./Car.js'),
    Vehicle = require('./Vehicle.js'),
    SpecialVehicle = require('./SpecialVehicle.js'),
    inherit = require('./inherit.js').inherit;

//creation of taxi station
var taxiStation = [

    //initialization of cars
    bmw = new Car(14, 'd', 42400),
    audi = new Car(20,'s',88000),
    vw = new Car(5,'b',46240),
    toyota = new Car(19,'c',37100),
    saab = new Car(14,'d',64250),
    ford = new Car(6,'d',90900),
    opel = new Car(12,'s',85000),
    skoda = new Car(12,'a',23000),
    lada = new Car(8,'p',90300),
    mercedes = new Car(18,'a',19000),
    renault = new Car(5,'c',62000),
    
    //initialization of special vehicles
    police = new SpecialVehicle(),
    ambulance = new SpecialVehicle(),
    firecar = new SpecialVehicle()

];

taxiStation.sort(function(a, b) {
    return parseInt(a.getFuelConsumption()) - parseInt(b.getFuelConsumption());
});


