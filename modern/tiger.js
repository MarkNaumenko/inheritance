var extendDeep = require('./extendDeep.js'),
	Animal = require('./animal.js');

var tiger = extendDeep(Animal);
tiger.roar = function() {
	console.log('AArrrr!');
};
tiger.roar2 = function() {
	console.log('@@@@AArrrr!');
};

module.exports = tiger;