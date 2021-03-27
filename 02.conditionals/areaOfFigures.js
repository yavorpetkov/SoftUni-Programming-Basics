function areaOfFigures(input){
    let Figure = input[0];
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);

    if(Figure == `square`){
        area = num1 * num1;
        console.log(area);
    }else if(Figure == `rectangle`){
        area = num1 * num2;
        console.log(area);
    }else if(Figure == `circle`){
        area = (num1 * num1) * Math.PI;
        console.log(area);
    }else if(Figure == `triangle`){
        area = (num1 * num2) / 2;
        console.log(area);
    }
}areaOfFigures('square',5)