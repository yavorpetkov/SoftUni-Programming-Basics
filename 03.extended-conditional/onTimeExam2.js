function onTimeExam(input) {
	let hourfForExam = Number(input[0]);
	let minutesForExam = Number(input[1]);
	let hourfOfArival = Number(input[2]);
	let minutesOfArival = Number(input[3]);

	let examTimeMinutes = hourfForExam * 60 + minutesForExam;
	let arriveTimeminutes = hourfOfArival * 60 + minutesOfArival;
	let minFinalTime = examTimeMinutes - arriveTimeminutes;

	if (examTimeMinutes - arriveTimeminutes <= 30 && arriveTimeminutes - examTimeMinutes >= 0) {
		console.log(`On time`);
		if (minFinalTime !== 0) {
			console.log(`${examTimeMinutes - arriveTimeminutes} minutes begore the start`);
		}
	}
}
onTimeExam([ 9, 00, 9, 40 ]);
