function minNumber(input) {
	let n = Number(input[0]);
	let index = 0;
	let min = Number.MAX_SAFE_INTEGER;
	while (n !== 'Stop') {
		let num = Number(input[index]);
		if (min > num) {
			min = num;
		}
		n = input[index];
		index++;
	}
	console.log(min);
}
minNumber([ -5000, -4000, -3000, -2000, -1000, 'Stop' ]);
