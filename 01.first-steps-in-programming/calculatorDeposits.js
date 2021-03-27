function calculaterDeposits(input){
    let depositPrice = Number(input[0]);
    let deadlineOfDeposite = Number(input[1]);
    let yearlyInterestPercent = Number(input[2]);
    let acumulatedInterest = depositPrice * (yearlyInterestPercent/100);
    let interestForOneMonth = acumulatedInterest / 12;
    let amunt = depositPrice + (deadlineOfDeposite * interestForOneMonth);
    let amount = depositPrice + deadlineOfDeposite * ((depositPrice * yearlyInterestPercent) / 12);
    console.log(amunt);
}
calculaterDeposits([200,3,5.7])
