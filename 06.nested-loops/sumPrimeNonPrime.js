function sumPrimeNonPrime(input) {
	let index = 0;
	let primeSum = 0;
	let nonPrimeSum = 0;
	let isNegative = false;

	for (let i = 0; i < input.length; i++) {
		let currentNum = Number(input[index]);

		if (currentNum < 0) {
			index++;
			isNegative = true;
			console.log(`Number is negative.`);

			continue;
		}
		for (let h = 2; h <= currentNum; h++) {
			if (h === currentNum && currentNum % h === 0) {
				primeSum += currentNum;
			} else if (currentNum % h === 0) {
				nonPrimeSum += currentNum;
				break;
			}
		}
		index++;
	}
	console.log(`Sum of all prime numbers is: ${primeSum}`);
	console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime([ '0', '-9', '0', 'stop' ]);
