function numberPyramid(input) {
	let num = Number(input[0]);
	let counter = 1;
	let isTrue = false;

	for (let row = 1; row <= num; row++) {
		let printLine = '';
		for (let col = 1; col <= row; col++) {
			printLine += counter + ' ';
			counter++;
			if (counter > num) {
				isTrue = true;
				break;
			}
		}
		console.log(printLine);
		if (isTrue) {
			break;
		}
	}
}
numberPyramid([ 15 ]);
