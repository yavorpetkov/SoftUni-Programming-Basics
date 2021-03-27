function readText(input) {
	let index = 0;

	while (true) {
		let str = input[index];
		index++;
		if (str === 'Stop') {
			break;
		}
		console.log(str);
	}
}
readText([ 'Nakov', 'Softuni', 'Sofia', 'SomeText', 'Stop', 'Europe' ]);
