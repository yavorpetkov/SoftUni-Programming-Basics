function birthday(input){
    let rentOfHall = Number(input[0]);
    let cake = rentOfHall * (20/100);
    let drinks = cake - (cake*(45/100));
    let animator = rentOfHall / 3;
    let buget = rentOfHall + cake + drinks + animator;
    console.log(buget);
}birthday([2250]);