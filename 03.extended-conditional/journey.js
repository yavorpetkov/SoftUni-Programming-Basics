function journey(input) {
	let budget = Number(input[0]);
	let season = input[1];
	let finalPrice = 0;
	let destination;
	let place;

	if (budget <= 100) {
		destination = `Bulgaria`;
		if (season === `summer`) {
			place = `Camp`;
			finalPrice = budget * 0.7;
		} else if (season === `winter`) {
			place = `Hotel`;
			finalPrice = budget * 0.3;
		}
	} else if (budget <= 1000) {
		destination = `Balkans`;
		if (season === `summer`) {
			place = `Camp`;
			finalPrice = budget * 0.6;
		} else if (season === `winter`) {
			place = `Hotel`;
			finalPrice = budget * 0.2;
		}
	}
	if (budget > 1000) {
		destination = `Europe`;
		place = `Hotel`;
		finalPrice = budget * 0.1;
	}
	console.log(`Somewhere in ${destination}
${place} - ${Math.abs(finalPrice - budget).toFixed(2)}`);
}
journey([ 50, `summer` ]);
