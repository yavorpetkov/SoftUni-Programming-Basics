function hotelRoom(input) {
	let month = input[0];
	let nightsOfStay = Number(input[1]);
	let studioSum = 0;
	let apartmentSum = 0;

	if (month === `May` || month === `October`) {
		studioSum = nightsOfStay * 50;
		apartmentSum = nightsOfStay * 65;
		if (nightsOfStay > 14) {
			studioSum = studioSum * 0.7;
			apartmentSum = apartmentSum * 0.9;
		} else if (nightsOfStay > 7) {
			studioSum = studioSum * 0.95;
		}
	} else if (month === `June` || month === `September`) {
		studioSum = nightsOfStay * 75.2;
		apartmentSum = nightsOfStay * 68.7;
		if (nightsOfStay > 14) {
			studioSum = studioSum * 0.8;
			apartmentSum = apartmentSum * 0.9;
		}
	} else if (month === `July` || month === `August`) {
		studioSum = nightsOfStay * 76;
		apartmentSum = nightsOfStay * 77;
		if (nightsOfStay > 14) {
			apartmentSum = apartmentSum * 0.9;
		}
	}
	console.log(`Apartment: ${apartmentSum.toFixed(2)} lv.`);
	console.log(`Studio: ${studioSum.toFixed(2)} lv.`);
}
