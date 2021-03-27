function radiantToDegrees(input){
    let radiant = Number(input[0]);
    let degrees = radiant * 180/Math.PI;
    console.log(degrees.toFixed(0));
}