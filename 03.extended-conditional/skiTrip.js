function skiTrip(input) {
    let daysForStay = Number(input[0]);
    let typeOfRoom = input[1];
    let grade = input[2];
    let nights = daysForStay - 1;
    let priceForRoom = 0

    switch(typeOfRoom){
        case `room for one person`:priceForRoom = nights * 18;break;
        case `apartment`:priceForRoom = nights * 25;break;
        case `president apartment`:priceForRoom = nights * 35;break;
    }
    if (nights < 10) {
        switch(typeOfRoom){
            case `room for one person`:priceForRoom = priceForRoom * 1;break;
            case `apartment`:priceForRoom = priceForRoom - (priceForRoom * 0.30);break;
            case `president apartment`:priceForRoom = priceForRoom - (priceForRoom * 0.10);break;
        }
        
    }else if (nights >= 10 && nights <= 15) {
        switch(typeOfRoom){
            case `room for one person`:priceForRoom = priceForRoom * 1;break;
            case `apartment`:priceForRoom = priceForRoom - (priceForRoom * 0.35);break;
            case `president apartment`:priceForRoom = priceForRoom - (priceForRoom * 0.15);break;
        }
        
    }else if (nights > 15) {
        switch(typeOfRoom){
            case `room for one person`:priceForRoom = priceForRoom * 1;break;
            case `apartment`:priceForRoom = priceForRoom - (priceForRoom * 0.50);break;
            case `president apartment`:priceForRoom = priceForRoom - (priceForRoom * 0.20);break;
        }
        
    }
    if (grade == `positive`){
        priceForRoom = priceForRoom * 1.25;
        console.log((priceForRoom).toFixed(2));
    }else if (grade == `negative`) {
        priceForRoom = priceForRoom - (priceForRoom * 0.10);
        console.log((priceForRoom).toFixed(2));
    }
}