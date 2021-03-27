function factorial(input) {
	let numbers = input[0];
	let result = 1;

	for (let i = 2; i <= numbers; i++) {
		result = result * i;
	}

	console.log(result);
}
factorial([ 8 ]);
