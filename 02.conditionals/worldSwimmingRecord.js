function worldSwimmingRecord(input){
    let recordInSeconds = Number(input[0]);
    let distanceInMetre = Number(input[1]);
    let timeInSecondsfor1m = Number(input[2]);

    let timeNeeded = distanceInMetre * timeInSecondsfor1m;
    let slow = Math.floor(distanceInMetre/15) * 12.5;
    timeNeeded = timeNeeded + slow;

    if(timeNeeded < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${timeNeeded.toFixed(2)} seconds.`);
    }else{
        let diff = Math.abs(timeNeeded - recordInSeconds);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}worldSwimmingRecord([55555.67,3017,5.03])