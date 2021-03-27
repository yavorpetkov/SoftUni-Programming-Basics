function sumOfTwoNumbers(input) {
	let num = Number(input[0]);
	let numTwo = Number(input[1]);
	let magicNumber = Number(input[2]);
	let count = 0;
	let x = 0;
	let y = 0;
	for (x = num; x <= numTwo; x++) {
		for (y = num; y <= numTwo; y++) {
			count++;
			if (x + y === magicNumber && y <= numTwo) {
				break;
			}
		}
		if (x + y === magicNumber && y <= numTwo) {
			break;
		}
	}
	if (x + y === magicNumber) {
		console.log(`Combination N:${count} (${x} + ${y} = ${magicNumber})`);
	} else {
		console.log(`${count} combinations - neither equals ${magicNumber}`);
	}
}
sumOfTwoNumbers([ 88, 888, 1000 ]);
