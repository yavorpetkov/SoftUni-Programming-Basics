function salary(input) {
	let tabs = Number(input[0]);
	let salary = Number(input[1]);
	let index = 2;
	let sites = input[index];

	for (let i = 0; i <= tabs; i++) {
		let num = input[index];
		index++;
		if (num === 'Facebook') {
			salary = salary - 150;
		}
		if (num === 'Instagram') {
			salary = salary - 100;
		}
		if (num === 'Reddit') {
			salary = salary - 50;
		}
	}
	if (salary <= 0) {
		console.log(`You have lost your salary.`);
	} else {
		console.log(salary);
	}
}
salary([ 5, 500, 'Facebook', 'vafaf', 'softuni.bg', 'Facebook', 'Facebook' ]);
