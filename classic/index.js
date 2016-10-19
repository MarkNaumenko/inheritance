var prompt = require('prompt'),
    Car = require('./car.js'),
    Vehicle = require('./vehicle.js'),
    SpecialVehicle = require('./specialVehicle.js'),
    inherit = require('./inherit.js');

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
    return parseInt(a.fuelConsumption) - parseInt(b.fuelConsumption);
});

var getTaxiStationFullPrice = function() {
    var fullPrice = 0;
    for (i = 0; i < taxiStation.length; i++) {
        fullPrice += taxiStation[i].price;
    }
    return fullPrice;
};

console.log('\nFull price of station: ' + getTaxiStationFullPrice() + '\n');
console.log('===================================');

//read
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var minFuel, maxFuel; //range of fuel values for samples

rl.question('Input minFuel (filter range) ', (answer) => {
    minFuel = answer;
    rl.close();
    rl2.question('Input maxFuel (filter range) ', (answer) => {
        maxFuel = answer;
        rl2.close();
        console.log('Filtered list of cars:');
        getCarsOfRange(taxiStation, minFuel, maxFuel);
        console.log('===================================');    
    });
});

var getCarsOfRange = function(array, minFuel, maxFuel) {
    for (i = 0; i < array.length; i++) {
        if (array[i].fuelConsumption <= maxFuel && array[i].fuelConsumption >= minFuel) {
            console.log(array[i]);
        }
    }
};


