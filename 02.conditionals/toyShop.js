function toyShop(input){
    let priceOfVacation = Number(input[0]);
    let numOfPuzzels = Number(input[1]);
    let numOfDows = Number(input[2]);
    let numOfBears = Number(input[3]);
    let numOfMinions = Number(input[4]);
    let numOfTrucks = Number(input[5]);

    let sumForToys = numOfPuzzels * 2.60 + numOfDows * 3 + numOfBears * 4.10 + numOfMinions * 8.20 + numOfTrucks * 2;
    let numOfToys = numOfBears + numOfDows + numOfMinions + numOfPuzzels +  numOfTrucks;

    if(numOfToys >= 50){
        sumForToys = sumForToys * 0.75;
    }
    sumForToys = sumForToys * 0.90;

    if(sumForToys >= priceOfVacation){
        console.log(`Yes! ${(sumForToys-priceOfVacation).toFixed(2)} lv left.`)
    }else if(sumForToys < priceOfVacation){
        console.log(`Not enough money! ${(priceOfVacation-sumForToys).toFixed(2)} lv needed.`)
    }
    
}
toyShop([320,8,2,5,5,1])