function fishingBoat(input) {
	let budget = Number(input[0]);
	let season = input[1];
	let numberOfFishermen = Number(input[2]);
	let priceOfBoat = 0;

	if (season === `Spring`) {
		priceOfBoat = 3000;
		if (numberOfFishermen <= 6) {
			priceOfBoat = priceOfBoat * 0.9;
		}
		if (numberOfFishermen >= 7 && numberOfFishermen <= 11) {
			priceOfBoat = priceOfBoat * 0.85;
		}
		if (numberOfFishermen >= 12) {
			priceOfBoat = priceOfBoat * 0.75;
		}
	}
	if (season === `Summer` || season === `Autumn`) {
		priceOfBoat = 4200;
		if (numberOfFishermen <= 6) {
			priceOfBoat = priceOfBoat * 0.9;
		}
		if (numberOfFishermen >= 7 && numberOfFishermen <= 11) {
			priceOfBoat = priceOfBoat * 0.85;
		}
		if (numberOfFishermen >= 12) {
			priceOfBoat = priceOfBoat * 0.75;
		}
	}
	if (season === `Winter`) {
		priceOfBoat = 2600;
		if (numberOfFishermen <= 6) {
			priceOfBoat = priceOfBoat * 0.9;
		}
		if (numberOfFishermen >= 7 && numberOfFishermen <= 11) {
			priceOfBoat = priceOfBoat * 0.85;
		}
		if (numberOfFishermen >= 12) {
			priceOfBoat = priceOfBoat * 0.75;
		}
	}
	if (priceOfBoat <= budget) {
		console.log(`Yes! You have ${Math.abs(priceOfBoat - budget).toFixed(2)} leva left.`);
	} else if (priceOfBoat >= budget) {
		console.log(`Not enough money! You need ${Math.abs(priceOfBoat - budget).toFixed(2)} leva.`);
	}
}
