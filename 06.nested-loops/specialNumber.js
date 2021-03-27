function specialNumber(input) {
	let specialNum = Number(input[0]);
	let counter = 0;
	let finalSum = '';

	for (let i = 1111; i <= 9999; i++) {
		let textNum = '' + i;
		for (let h = 0; h < textNum.length; h++) {
			if (specialNum % Number(textNum[h]) === 0) {
				counter++;
			} else {
				break;
			}
		}
		if (counter === 4) {
			finalSum += textNum + ' ';
		}

		counter = 0;
		textNum = '';
	}
	console.log(finalSum);
}
specialNumber([ 58 ]);
