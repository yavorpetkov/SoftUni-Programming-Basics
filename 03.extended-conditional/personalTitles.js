function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    if(gender == `f`){
        if(age >= 16){
            console.log(`Ms.`);
        }else if (age < 16) {
            console.log(`Miss`);
            
        }
    }else if (gender == `m`) {
        if (age >= 16) {
            console.log(`Mr.`);
        }else if (age < 16) {
            console.log(`Master`);
        }
    }
}