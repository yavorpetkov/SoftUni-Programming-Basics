function trainTheTrainers(input) {
	let index = 0;
	let numOfGudges = Number(input[index]);
	index++;
	let nameOfClass = input[index];
	index++;
	let grade = 0;
	let finalGrade = 0;
	let counter = 0;

	for (let i = nameOfClass; i !== 'Finish'; i++) {
		if (nameOfClass === 'Finish') {
			break;
		}
		for (let h = 1; h <= numOfGudges; h++) {
			grade += Number(input[index]);
			counter++;
			index++;
		}
		console.log(`${nameOfClass} - ${(grade / numOfGudges).toFixed(2)}.`);
		nameOfClass = input[index];
		finalGrade += grade;
		index++;
		grade = 0;
	}
	console.log(`Student's final assessment is ${(finalGrade / counter).toFixed(2)}.`);
}
trainTheTrainers([
	'2',
	'Objects and Classes',
	'5.77',
	'4.23',
	'Dictionaries',
	'4.62',
	'5.02',
	'RegEx',
	'2.88',
	'3.42',
	'Finish'
]);
