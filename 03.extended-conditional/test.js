function test(input){
    let name = input[0];

    switch(name){
        case `Ivan`:console.log(`Hello Ivan`);break;
        case `Pavel`:console.log(`Hello Pavel`);break;
        default :console.log(`gotino`);break;
    }
}test([`Ivan`])