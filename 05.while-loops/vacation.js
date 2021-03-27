function vacation(input) {
	let index = 0;
	let moneyForVacation = Number(input[index]);
	index++;
	let cashInHand = Number(input[index]);
	index++;
	let days = 0;
	let daysForspend = 0;

	while (cashInHand < moneyForVacation) {
		let action = input[index];
		index++;
		let sum = Number(input[index]);
		index++;
		switch (action) {
			case 'spend':
				daysForspend++;
				cashInHand -= sum;
				if (cashInHand < 0) {
					cashInHand = 0;
				}
				break;
			case 'save':
				cashInHand += sum;
				daysForspend = 0;
				break;
		}
		days++;
		if (daysForspend === 5) {
			break;
		}
	}
	if (cashInHand >= moneyForVacation) {
		console.log(`You saved the money for ${days} days.`);
	} else {
		console.log(`You can't save the money.`);
		console.log(days);
	}
}
vacation([ 110, 60, 'spend', 10, 'spend', 10, 'spend', 10, 'spend', 10, 'spend', 10 ]);
