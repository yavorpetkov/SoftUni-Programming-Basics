function charityCampaign(input){
    let numOfDays = Number(input[0]);
    let numOfSweets = Number(input[1]);
    let numOfCakes = Number(input[2]);
    let numOfHash = Number(input[3]);
    let numOfPancakes = Number(input[4]);
    let cake = 45
    let hash = 5.80
    let pancake = 3.20
    let cakes = numOfCakes * cake;
    let hashes = numOfHash * hash;
    let pancakes = numOfPancakes * pancake;
    let sumOfDay = ((cakes + hashes + pancakes) * numOfSweets);
    let sumOfCampaign = sumOfDay * numOfDays;
    let afterCosts = sumOfCampaign - (sumOfCampaign / 8);
    console.log(afterCosts)
}