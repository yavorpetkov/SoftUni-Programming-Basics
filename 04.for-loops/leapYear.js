function leapYear(input) {
	let firstYear = Number(input[0]);
	let secondYear = Number(input[1]);
	for (let i = firstYear; i <= secondYear; i += 4) {
		console.log(i);
	}
}
leapYear([ 1908, 1919 ]);
