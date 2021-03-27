function sumSeconds(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let totalTime = num1 + num2 + num3;
    let minutes = Math.trunc(totalTime / 60);
    let seconds = totalTime % 60;
    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }
}