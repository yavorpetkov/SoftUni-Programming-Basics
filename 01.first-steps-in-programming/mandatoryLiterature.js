function mandatoryLiterature(input){
    let numPages = Number(input[0]);
    let pages = Number(input[1]);
    let numOfDays = Number(input[2]);
    let timeForReading = numPages / pages;
    let hoursNeeded = timeForReading / numOfDays;
    console.log(hoursNeeded);
}