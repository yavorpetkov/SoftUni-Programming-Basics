function numbersDivisibleBy9(input) {
	let n = Number(input[0]);
	let m = Number(input[1]);
	let sum = 0;
	let outputNumbers = 0;

	for (let i = n; i < m; i++) {
		if (i % 9 === 0) {
			sum += Number(i);
		}
	}
	console.log(`The sum: ${sum}`);
	for (let i = n; i < m; i++) {
		if (i % 9 === 0) {
			outputNumbers = Number(i);
			console.log(outputNumbers);
		}
	}
}
numbersDivisibleBy9([ 100, 200 ]);
