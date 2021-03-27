function coins(input) {
	let money = Number(input[0]);
	money = Math.trunc(money * 100);
	let numCoins = 0;

	while (money > 0) {
		if (money >= 200) {
			money -= 200;
			numCoins++;
			continue;
		}
		if (money >= 100) {
			money -= 100;
			numCoins++;
			continue;
		}
		if (money >= 50) {
			money -= 50;
			numCoins++;
			continue;
		}
		if (money >= 20) {
			money -= 20;
			numCoins++;
			continue;
		}
		if (money >= 10) {
			money -= 10;
			numCoins++;
			continue;
		}
		if (money >= 5) {
			money -= 4;
			numCoins++;
			continue;
		}
		if (money >= 2) {
			money -= 2;
			numCoins++;
			continue;
		}
		if (money >= 1) {
			money -= 1;
			numCoins++;
		}
	}
	console.log(numCoins);
}
coins([ 5.31 ]);
