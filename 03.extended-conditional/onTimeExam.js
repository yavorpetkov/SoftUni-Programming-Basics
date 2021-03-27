function onTimeExam(input) {
	let hourfForExam = Number(input[0]);
	let minutesForExam = Number(input[1]);
	let hourfOfArival = Number(input[2]);
	let minutesOfArival = Number(input[3]);
	let timeLeftMinutes = 0;
	let timeLeftHours = 0;

	if (
		(hourfOfArival >= hourfForExam && minutesOfArival > minutesForExam) ||
		(hourfOfArival > hourfForExam && minutesOfArival < minutesForExam)
	) {
		if (hourfForExam === hourfOfArival) {
			if (minutesForExam + minutesOfArival > 60) {
				timeLeftMinutes = (minutesOfArival + minutesForExam) % 60;
			} else {
				timeLeftMinutes = Math.abs(minutesOfArival - minutesForExam);
			}
			console.log(`Late`);
			console.log(`${timeLeftMinutes} minutes after the start`);
		} else if (hourfForExam <= hourfOfArival) {
			if (minutesForExam + minutesOfArival > 60) {
				timeLeftMinutes = (minutesOfArival + minutesForExam) % 60;
			} else {
				timeLeftMinutes = Math.abs(minutesOfArival - minutesForExam);
			}
			if (timeLeftMinutes === 0) {
				timeLeftMinutes = `00`;
			}
			timeLeftHours = hourfOfArival - hourfForExam;
			console.log(`Late`);
			console.log(`${timeLeftHours}:${timeLeftMinutes} minutes after the start`);
		}
	}
	if (hourfOfArival > hourfForExam && minutesOfArival === minutesForExam) {
		if (minutesForExam + minutesOfArival > 60) {
			timeLeftMinutes = (minutesOfArival + minutesForExam) % 60;
		} else {
			timeLeftMinutes = Math.abs(minutesOfArival - minutesForExam);
		}
		if (timeLeftMinutes === 0) {
			timeLeftMinutes = `00`;
		}
		timeLeftHours = hourfOfArival - hourfForExam;
		console.log(`Late`);
		console.log(`${timeLeftHours}:${timeLeftMinutes} minutes after the start`);
	}
	if (
		(hourfOfArival <= hourfForExam && minutesOfArival < minutesForExam) ||
		(hourfOfArival < hourfForExam && minutesOfArival > minutesForExam)
	) {
		if (hourfForExam === hourfOfArival) {
			if (minutesForExam + minutesOfArival > 60) {
				timeLeftMinutes = (minutesOfArival + minutesForExam) % 60;
			} else {
				timeLeftMinutes = Math.abs(minutesOfArival - minutesForExam);
			}
			if (minutesForExam - 30) console.log(`On time`);
			console.log(`${timeLeftMinutes} minutes before the start`);
		}
	}
}
onTimeExam([ 10, 50, 10, 20 ]);
