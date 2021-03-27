function graduationPtTwo(input) {
	let index = 0;
	let name = input[0];
	let cklass = 0;
	let sum = 0;
	let excluded = 0;
	while (cklass < 12) {
		index++;
		let grade = Number(input[index]);
		if (grade < 4.0) {
			excluded++;

			continue;
		}
		cklass++;
		sum += grade;
		if (excluded > 1) {
			break;
		}
	}
	if (cklass === 12) {
		let average = sum / 12;
		console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
	} else {
		console.log(`${name} has been excluded at ${cklass} grade`);
	}
}
graduationPtTwo([ 'Gosho', 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 4, 3 ]);
