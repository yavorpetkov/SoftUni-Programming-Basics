function cinema(input) {
    let typeProjection = input[0];
    let row = Number(input[1]);
    let columb = Number(input[2]);
    let income = 0;

    switch(typeProjection){
        case `Premiere`:income = (row * columb) * 12;break;
        case `Normal`:income = (row * columb) * 7.5;break;
        case `Discount`:income = (row * columb) * 5;break;
    }
    console.log((income).toFixed(2));
}