var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/fwc');

var products = [
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/bb8.png',
		title: 'Title 1',
		description: 'Description 1',
		stock: 0,
		price: 1
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/m9g8.png',
		title: 'Title 2',
		description: 'Description 2',
		stock: 0,
		price: 5
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r2astromech.png',
		title: 'Title 3',
		description: 'Description 3',
		stock: 0,
		price: 10
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r2d2.png',
		title: 'Title 4',
		description: 'Description 4',
		stock: 0,
		price: 2
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r2d6.png',
		title: 'Title 5',
		description: 'Description 5',
		stock: 0,
		price: 4
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r2f2.png',
		title: 'Title 6',
		description: 'Description 6',
		stock: 0,
		price: 6
	})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		done++;
		if (done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}