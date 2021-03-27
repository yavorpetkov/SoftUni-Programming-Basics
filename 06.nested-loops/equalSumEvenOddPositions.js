function equalSums(input) {
	let firstNum = Number(input[0]);
	let secondNum = Number(input[1]);
	let finalSum = '';

	for (let i = firstNum; i <= secondNum; i++) {
		let textNum = '' + i;
		let oddSum = 0;
		let evenSum = 0;
		for (let h = 0; h < textNum.length; h++) {
			if (h % 2 === 0) {
				oddSum += Number(textNum[h]);
			} else {
				evenSum += Number(textNum[h]);
			}
		}
		if (oddSum === evenSum) {
			finalSum += textNum + ' ';
		}
	}
	console.log(finalSum);
}
equalSums([ '123456', '124000' ]);
