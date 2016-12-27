var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/fwc');

var products = [
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/bb8.png',
		title: 'BB-8',
		description: 'When you reveal a green maneuver, you may perform a free barrel roll action.',
		stock: 2,
		price: 1.25
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/m9g8.png',
		title: 'M9-G8',
		description: 'When a ship you have locked is attacking, you may choose 1 attack die. The attacker must reroll that die. You can aquire target locks on other friendly ships.',
		stock: 0,
		price: 1.25
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r2astromech.png',
		title: 'R2 Astromech',
		description: 'You may have all 1 and 2 speed maneuvers as green maneuvers.',
		stock: 7,
		price: 3.25
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r2d2.png',
		title: 'R2-D2',
		description: 'After executing a green maneuver, you may recover 1 shield (up to your shield value).',
		stock: 5,
		price: 1.25
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r2d6.png',
		title: 'R2-D6',
		description: 'You cannot equip this upgrade if you already have a () upgrade icon or if your pilot skill value is 2 or lower.',
		stock: 3,
		price: 3.75
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r2f2.png',
		title: 'R2-F2',
		description: 'ACTION: Increase your agility value by 1 until the end of this game round.',
		stock: 8,
		price: 1
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r3a2.png',
		title: 'R3-A2',
		description: 'When you declare the target of your attack, if the defender is inside your firing arc, you may recieve 1 stress token to cause the defender to receive 1 stress token.',
		stock: 2,
		price: 8.50
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r3astromech.png',
		title: 'R3 Astromech',
		description: 'Once per round, when attacking with a primary weapon, you may cancel 1 of your () results during the Modify Attack Dice step to assign 1 evade token to your ship.',
		stock: 0,
		price: 3.25
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r4d6.png',
		title: 'R4-D6',
		description: 'When you are hit by an attack and there are at least 3 uncanceled () results, you may choose and cancel those results until there are 2 remaining. For each result canceled in this way, receive 1 stress token.',
		stock: 4,
		price: 1.50
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r5astromech.png',
		title: 'R5 Astromech',
		description: 'During the End phase, you may choose 1 of your faceup Damage cards with the SHIP trait and flip it facedown.',
		stock: 6,
		price: 1.50
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r5d8.png',
		title: 'R5-D8',
		description: 'ACTION: Roll 1 defense die. On a () or () result, discard 1 of your facedown Damage cards.',
		stock: 4,
		price: 0.99
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r5k6.png',
		title: 'R5-K6',
		description: 'After sending your target lock, roll 1 defense die. On a () result, immediately acquire a target lock on that same ship. You cannot spend this target lock during this attack.',
		stock: 6,
		price: 0.99
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r5p9.png',
		title: 'R5-P9',
		description: 'At the end of the Combat phase, you may spend 1 of your focus tokens to recover 1 shield (up to your shield value).',
		stock: 2,
		price: 9.99
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r5x3.png',
		title: 'R5-X3',
		description: 'Before you reveal your maneuver, you may discard this card to ignore obstacles until the end of the round.',
		stock: 3,
		price: 2.70
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r7astromech.png',
		title: 'R7 Astromech',
		description: 'Once per round when defending, if you have a target lock on the attacker, you may spend the target lock to choose any or all attack dice. The attacker must reroll the chosen dice.',
		stock: 5,
		price: 2.00
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/r7t1.png',
		title: 'R7-T1',
		description: "ACTION: Choose an enemy ship at Range 1-2. If you are inside that ship's firing arc, you may acquire a target lock on that ship. Then you may perform a free boost action.",
		stock: 6,
		price: 1.20
	}),
	new Product({
		imagePath: 'http://www.fluxwingcantina.co.uk/images/xwing-cards/upgrades/amd/targetingastromech.png',
		title: 'Targeting Astromech',
		description: 'After you execute a red maneuver, you may acquire a target lock.',
		stock: 2,
		price: 1.80
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