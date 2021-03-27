function fruitMarket(input) {
    let strawberriesInLv = Number(input[0]);
    let bananasInKg = Number(input[1]);
    let orangeInKg = Number(input[2]);
    let rasberriesInKg = Number(input[3]);
    let strawberriesInKg = Number(input[4]);
    
    let rasberriesInLv = strawberriesInLv / 2;
    let orangeInLv = rasberriesInLv - (rasberriesInLv * (40/100));
    let bananasInLv = rasberriesInLv - (rasberriesInLv * (80/100));

    let sumForRasberries = rasberriesInKg * rasberriesInLv;
    let sumForOrange = orangeInKg * orangeInLv;
    let sumForBanana = bananasInKg * bananasInLv;
    let sumForStrawberries = strawberriesInKg * strawberriesInLv;
    let allSum = sumForBanana + sumForOrange + sumForRasberries +  sumForStrawberries;
    console.log(allSum);
}