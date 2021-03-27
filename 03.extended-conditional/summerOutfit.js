function summerOutfit(input) {
    let tempriture = Number(input[0]);
    let timeOfDay = input[1];
    let outfit
    let shoes

    if(tempriture >= 10 && tempriture <= 18){
        if(timeOfDay == `Morning`){
            outfit = `Sweatshirt`
            shoes = `Sneakers`
        }else if (timeOfDay == `Afternoon` || timeOfDay == `Evening`) {
            outfit = `Shirt`
            shoes = `Moccasins`
        }
        console.log(`It's ${tempriture} degrees, get your ${outfit} and ${shoes}.`);
    }else if (tempriture > 18 && tempriture <= 24) {
        if(timeOfDay == `Afternoon`){
            outfit = `T-Shirt`
            shoes = `Sandals`
        }else if (timeOfDay == `Morning` || timeOfDay == `Evening`) {
            outfit = `Shirt`
            shoes = `Moccasins`
        }
        console.log(`It's ${tempriture} degrees, get your ${outfit} and ${shoes}.`);
    }else if (tempriture >= 25) {
        if(timeOfDay == `Morning`){
            outfit = `T-Shirt`
            shoes = `Sandals`
        }else if (timeOfDay == `Afternoon`) {
            outfit = `Swim Suit`
            shoes = `Barefoot`
        }else if (timeOfDay == `Evening`) {
            outfit = `Shirt`
            shoes = `Moccasins`
        }
        console.log(`It's ${tempriture} degrees, get your ${outfit} and ${shoes}.`);
    }
}