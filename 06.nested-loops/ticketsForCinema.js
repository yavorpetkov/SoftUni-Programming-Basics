function cinemaTickets(input) {
	let movie = input[0];
	let seats = Number(input[1]);
	let standardSeats = 0;
	let kidSeasts = 0;
	let studentSeast = 0;
	let totalSeats = 0;
	let moviePercent = 0;
	let seatsSum = 0;
	for (let i = 2; i <= input.length; i++) {
		let count = input[i];

		switch (count) {
			case 'kid':
				kidSeasts++;
				break;
			case 'student':
				studentSeast++;
				break;
			case 'standard':
				standardSeats++;
				break;
			default:
				break;
		}
		if (count === 'End') {
			moviePercent = totalSeats / seats * 100;
			i++;
			console.log(`${movie} - ${moviePercent.toFixed(2)}% full.`);
			movie = input[i];
			i++;
			seats = Number(input[i]);
			totalSeats = 0;
			continue;
		}
		if (count === 'Finish') {
			moviePercent = totalSeats / seats * 100;
			seatsSum = kidSeasts + studentSeast + standardSeats;
			kidSeasts = kidSeasts / seatsSum * 100;
			standardSeats = standardSeats / seatsSum * 100;
			studentSeast = studentSeast / seatsSum * 100;
			console.log(`${movie} - ${moviePercent.toFixed(2)}% full.`);
			break;
		}
		totalSeats++;
	}
	console.log(`Total tickets: ${seatsSum}`);
	console.log(`${studentSeast.toFixed(2)}% student tickets.`);
	console.log(`${standardSeats.toFixed(2)}% standard tickets.`);
	console.log(`${kidSeasts.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
	'The Matrix',
	'20',
	'student',
	'standard',
	'kid',
	'kid',
	'student',
	'student',
	'standard',
	'student',
	'End',
	'The Green Mile',
	'17',
	'student',
	'standard',
	'standard',
	'student',
	'standard',
	'student',
	'End',
	'Amadeus',
	'3',
	'standard',
	'standard',
	'standard',
	'Finish'
]);
