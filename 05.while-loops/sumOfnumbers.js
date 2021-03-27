function sumOfNumbers(input) {
	let n = Number(input[0]);
	let sum = 0;
	let index = 1;

	while (sum < n) {
		sum += Number(input[index]);
		index++;
	}
	console.log(sum);
}
sumOfNumbers([ 100, 10, 20, 30, 40 ]);
