function maxNumber(input) {
	let n = Number(input[0]);
	let index = 0;
	let max = Number.MIN_SAFE_INTEGER;
	while (n !== 'Stop') {
		let num = Number(input[index]);
		if (num > max) {
			max = num;
		}
		n = input[index];
		index++;
	}
	console.log(max);
}
maxNumber([ -5000, -4000, -3000, -2000, -1000, 'Stop' ]);
