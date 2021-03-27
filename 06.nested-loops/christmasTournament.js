function tournament(input) {
	let days = Number(input[0]);
	let winNum = 0;
	let loseNum = 0;
	let donation = 0;
	let index = 1;
	let win = 0;
	let lose = 0;
	let dailyDonation = 0;
	let finalDonation = 0;

	for (let i = 0; i < days; i++) {
		for (let command = input[index]; command !== 'Finish'; index++) {
			if (command === 'win') {
				winNum++;
				dailyDonation += 20;
			} else if (command === 'lose') {
				loseNum++;
			} else if (command === 'Finish') {
				break;
			}
			command = input[index];
		}
		if (winNum > loseNum) {
			finalDonation += dailyDonation * 1.1;
			dailyDonation = 0;
			win++;
			winNum = 0;
			loseNum = 0;
		} else if (winNum < loseNum) {
			finalDonation += dailyDonation;
			lose++;
			dailyDonation = 0;
			winNum = 0;
			loseNum = 0;
		}
	}
	if (win === days) {
		finalDonation *= 1.2;
		console.log(`You won the tournament! Total raised money: ${finalDonation.toFixed(2)}`);
	} else if (win > lose) {
		console.log(`You won the tournament! Total raised money: ${finalDonation.toFixed(2)}`);
	} else {
		console.log(`You lost the tournament! Total raised money: ${finalDonation.toFixed(2)}`);
	}
}
tournament([
	'3',
	'darts',
	'lose',
	'handball',
	'lose',
	'judo',
	'win',
	'Finish',
	'snooker',
	'lose',
	'swimming',
	'lose',
	'squash',
	'lose',
	'table tennis',
	'win',
	'Finish',
	'volleyball',
	'win',
	'basketball',
	'win',
	'Finish'
]);
