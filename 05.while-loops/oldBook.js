function oldBook(input) {
	let theBook = input[0];
	let books = input[1];
	let index = 1;
	let numberOfBooks = 0;
	while (books !== 'No More Books') {
		let allTheBooks = input[index];
		numberOfBooks++;
		if (allTheBooks === theBook) {
			console.log(`You checked ${numberOfBooks - 1} books and found it.`);
			break;
		}
		index++;
		books = input[index];
	}
	if (books === 'No More Books') {
		console.log(`The book you search is not here!`);
		console.log(`You checked ${numberOfBooks} books.`);
	}
}
oldBook([ 'Troy', 'Stronger', 'Life Style', 'Troy' ]);
