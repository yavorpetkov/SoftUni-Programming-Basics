function examPreperation(input) {
	let index = 0;
	let acceptableBadGrades = Number(input[index]);
	index++;
	let subject = input[index];
	index++;
	let sum = 0;
	let numOfProblems = 0;
	let badGrades = 0;

	while (subject !== 'Enough') {
		let subjectName = subject;
		let grade = Number(input[index]);
		if (grade * 1 === grade) {
			numOfProblems++;
			sum += grade;
		}
		if (grade <= 4) {
			badGrades++;
			if (badGrades === acceptableBadGrades) {
				console.log(`You need a break, ${acceptableBadGrades} poor grades.`);
				break;
			}
		}

		subject = input[index];
		index++;
	}
	if (subject === 'Enough') {
		sum = sum / numOfProblems;
		console.log(`Average score: ${sum.toFixed(2)}`);
		console.log(`Number of problems: ${numOfProblems}`);
		console.log(`Last problem: ${input[index - 3]}`);
	}
}
examPreperation([ 3, 'Money', 3, 'Story', 4, 'Spring', 3, 'Bus', 6, 'Enough' ]);
