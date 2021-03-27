function godzillaVKong(input){
    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let priceForClothes = Number(input[2]);

    let decore = budget * 0.10;
    let priceForActors = actors * priceForClothes;

    if(actors > 150){
        priceForActors = priceForActors * 0.90;
    }

    let moneyNeeded = decore + priceForActors;
    let leftovers = Math.abs(moneyNeeded - budget);

    if(moneyNeeded <= budget){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftovers.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${leftovers.toFixed(2)} leva more.`);
    }

}godzillaVKong([15437.62,186,57.99])