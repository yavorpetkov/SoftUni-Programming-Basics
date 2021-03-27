function timePlus15Minutes(input){
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let ostatuk = 0

    if(minutes <= 44){
        console.log(`${hour}:${minutes + 15}`);
    }else if(minutes >= 45){
        ostatuk = (minutes + 15) % 60;
        if(ostatuk <= 9){
            ostatuk = (`0` + ostatuk);
        }
        if(hour < 23){
            console.log(`${hour + 1}:${ostatuk}`);
        }else{
            hour = 0
            console.log(`${hour}:${ostatuk}`);
        }
    }
}timePlus15Minutes([1,46])