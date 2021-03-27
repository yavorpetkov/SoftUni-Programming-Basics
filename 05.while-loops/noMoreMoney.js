function noMoreMoney(input) {
	let index = 1;
	let n = input[0];
	sum = 0;
	while (n !== 'NoMoreMoney') {
		let amount = Number(n);
		if (amount < 0) {
			console.log(`Invalid operation!`);
			break;
		}
		sum += amount;
		console.log(`Increase: ${amount.toFixed(2)}`);
		n = input[index];
		index++;
	}
	console.log(`Total: ${sum.toFixed(2)}`);
}
noMoreMoney([ 120, 45.55, -150, 'NoMoreMoney' ]);
