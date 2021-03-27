function minNumber(input) {
	let index = 0;
	let n = Number(input[index]);
	index++;
	let minimumNumber = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i <= n; i++) {
		let num = Number(input[index]);
		if (minimumNumber > num) {
			minimumNumber = num;
		}
		index++;
	}
	console.log(minimumNumber);
}
minNumber([ 2, 100, 3, 111, 1 ]);
