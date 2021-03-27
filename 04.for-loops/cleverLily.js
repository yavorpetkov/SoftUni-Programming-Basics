function cleverLily(input) {
	let age = Number(input[0]);
	let priceOfCleaner = Number(input[1]);
	let toyPrice = Number(input[2]);
	let birthdayMoney = 0;
	let toyMoney = 0;
	let money = 10;
	let toysCounter = 0;

	for (let i = 1; i <= age; i++) {
		if (i % 2 === 0) {
			birthdayMoney += money - 1;
			money += 10;
		}
		if (i % 2 !== 0) {
			toysCounter++;
		}
		toyMoney = toysCounter * toyPrice;
	}
	birthdayMoney = birthdayMoney + toyMoney;
	if (birthdayMoney > priceOfCleaner) {
		console.log(`Yes! ${(birthdayMoney - priceOfCleaner).toFixed(2)}`);
	} else {
		console.log(`No! ${(priceOfCleaner - birthdayMoney).toFixed(2)}`);
	}
}
cleverLily([ 21, 1570.98, 3 ]);
