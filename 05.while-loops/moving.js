function moving(input) {
	let width = Number(input[0]);
	let lenght = Number(input[1]);
	let hight = Number(input[2]);
	let index = 3;
	let sum = 0;
	let boxxes = input[index];
	//let theEnd = Number(input.length);
	let kbMeters = width * lenght * hight;
	while (boxxes !== 'Done') {
		let totalBoxxes = Number(input[index]);
		sum += totalBoxxes;
		if (sum > kbMeters) {
			console.log(`No more free space! You need ${sum - kbMeters} Cubic meters more.`);
			break;
		}
		index++;
		boxxes = input[index];
		//if (index === theEnd) {
		//	break;
		//}
	}
	if (boxxes === 'Done') {
		console.log(`${kbMeters - sum} Cubic meters left.`);
	}
}
moving([ 10, 1, 2, 4, 6, 'Done' ]);
