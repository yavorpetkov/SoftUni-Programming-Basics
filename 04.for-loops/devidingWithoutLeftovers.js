function devidingWithout(input) {
	let index = 0;
	let n = Number(input[index]);
	index++;
	let p1 = 0;
	let p2 = 0;
	let p3 = 0;

	for (let i = 0; i < n; i++) {
		let num = input[index];
		index++;
		if (num % 2 === 0) {
			p1++;
		}
		if (num % 3 === 0) {
			p2++;
		}
		if (num % 4 === 0) {
			p3++;
		}
	}
	console.log(`${(p1 / n * 100).toFixed(2)}%`);
	console.log(`${(p2 / n * 100).toFixed(2)}%`);
	console.log(`${(p3 / n * 100).toFixed(2)}%`);
}
devidingWithout([ 10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65 ]);
