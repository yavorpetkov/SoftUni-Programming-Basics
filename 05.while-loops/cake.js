function cake(input) {
	let index = 2;
	let widthOfCake = Number(input[0]);
	let hightOfCake = Number(input[1]);
	let cakePieces = Number(input[index]);
	let sizeOfCake = widthOfCake * hightOfCake;
	let sum = 0;
	let pieces = 0;

	while (cakePieces !== 'STOP') {
		let cakeCounter = Number(input[index]);
		sum += cakeCounter;

		if (sum > sizeOfCake) {
			break;
		}
		index++;
		cakePieces = input[index];
	}
	pieces = Math.abs(sum - sizeOfCake);
	if (sum > sizeOfCake) {
		console.log(`No more cake left! You need ${pieces} pieces more.`);
	} else {
		console.log(`${pieces} pieces are left.`);
	}
}
cake([ 10, 2, 2, 4, 6, 'STOP' ]);
