function newHome(input) {
	let typeOfFlowers = input[0];
	let numberOfFlowers = Number(input[1]);
	let budget = Number(input[2]);
	let finalPrice = 0;

	switch (typeOfFlowers) {
		case `Roses`:
			finalPrice = numberOfFlowers * 5;
			break;
		case `Dahlias`:
			finalPrice = numberOfFlowers * 3.8;
			break;
		case `Tulips`:
			finalPrice = numberOfFlowers * 2.8;
			break;
		case `Narcissus`:
			finalPrice = numberOfFlowers * 3;
			break;
		case `Gladiolus`:
			finalPrice = numberOfFlowers * 2.5;
			break;
		default:
			break;
	}
	if (typeOfFlowers === `Roses` && numberOfFlowers > 80) {
		finalPrice = finalPrice * 0.9;
	} else if (typeOfFlowers === `Dahlias` && numberOfFlowers > 90) {
		finalPrice = finalPrice * 0.85;
	} else if (typeOfFlowers === `Tulips` && numberOfFlowers > 80) {
		finalPrice = finalPrice * 0.85;
	} else if (typeOfFlowers === `Narcissus` && numberOfFlowers < 120) {
		finalPrice = finalPrice * 1.15;
	} else if (typeOfFlowers === `Gladiolus` && numberOfFlowers < 80) {
		finalPrice = finalPrice * 1.2;
	}
	if (finalPrice <= budget) {
		console.log(
			`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${Math.abs(
				finalPrice - budget
			).toFixed(2)} leva left.`
		);
	} else if (finalPrice >= budget) {
		console.log(`Not enough money, you need ${Math.abs(finalPrice - budget).toFixed(2)} leva more.`);
	}
}
newHome([ `Narcissus`, 119, 360 ]);
