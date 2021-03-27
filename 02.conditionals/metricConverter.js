function metricConverter(input){
    let num = Number(input[0]);
    let str1 = input[1];
    let str2 = input[2];
    
    if(str1 == `mm`){
        if(str2 == `m`){
            console.log((num / 1000).toFixed(3));
        }else if(str2 == `cm`){
            console.log((num / 10).toFixed(3));
        }
    }else if(str1 == `m`){
        if(str2 == `cm`){
            console.log((num * 100).toFixed(3));
        }else if(str2 == `mm`){
            console.log((num * 1000).toFixed(3));
        }
    }else if(str1 == `cm`){
        if(str2 == `m`){
            console.log((num / 100).toFixed(3));
        }else if(str2 == `mm`){
            console.log((num * 10).toFixed(3));
        }
    }
}metricConverter([22.66,`cm`,`mm`])
