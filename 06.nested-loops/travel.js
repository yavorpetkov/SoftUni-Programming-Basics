function travel(input) {
	let index = 0;
	let destinationIndex = 0;
	let amountIndex = 1;
	let destination = input[index];
	index++;
	let amountForVacarion = Number(input[amountIndex]);
	index++;
	let sum = 0;

	while (destination !== 'End') {
		let theMoney = Number(input[index]);
		amountForVacarion = Number(input[amountIndex]);
		sum += theMoney;
		destination = input[destinationIndex];
		if (sum >= amountForVacarion) {
			sum = 0;
			console.log(`Going to ${destination}!`);
			index++;
			destinationIndex = index;
			amountIndex = index;
			amountIndex++;
			index++;
		}
		index++;
	}
}
travel([
	'France',
	'2000',
	'300',
	'300',
	'200',
	'400',
	'190',
	'258',
	'360',
	'Portugal',
	'1450',
	'400',
	'400',
	'200',
	'300',
	'300',
	'Egypt',
	'1900',
	'1000',
	'280',
	'300',
	'500',
	'End'
]);
