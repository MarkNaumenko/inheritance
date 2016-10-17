var extendDeep = require('./extendDeep.js');

var animal = {class: 'cats'},
	tiger = extendDeep(animal);
console.log(tiger.class);
