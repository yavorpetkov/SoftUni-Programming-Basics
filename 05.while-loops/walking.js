function walking(input) {
	let index = 0;
	let miles = input[index];
	let totalMilesRan = 0;

	while (totalMilesRan < 10000) {
		let milesRan = Number(input[index]);
		index++;
		totalMilesRan += milesRan;
		miles = input[index];

		if (miles === 'Going home') {
			index++;
			milesRan = Number(input[index]);
			totalMilesRan += milesRan;
			break;
		}
	}
	let theRanAmount = Math.abs(totalMilesRan - 10000);
	if (totalMilesRan >= 10000) {
		console.log(`Goal reached! Good job!`);
		console.log(`${theRanAmount} steps over the goal!`);
	} else {
		console.log(`${theRanAmount} more steps to reach goal.`);
	}
}
walking([ 1500, 300, 2500, 3000, 'Going home', 200 ]);
