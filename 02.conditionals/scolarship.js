function scolarship(input){
    let incomeInLv = Number(input[0]);
    let averageGrade = Number(input[1]);
    let minimumPay = Number(input[2]);

    let socialScolarship = minimumPay * 0.35;
    let scolarshipForHighGrade = averageGrade * 25;

    if(incomeInLv < minimumPay){
        if(averageGrade >= 5.5){
            if(socialScolarship > scolarshipForHighGrade){
                console.log(`You get a Social scholarship ${Math.floor(socialScolarship)} BGN`);
            }else{
                console.log(`You get a scholarship for excellent results ${Math.floor(scolarshipForHighGrade)} BGN`);
            }
        }else if(averageGrade >= 4.5){
           console.log(`You get a Social scholarship ${Math.floor(socialScolarship)} BGN`);
        }else{
            console.log(`You cannot get a scholarship!`)
        }
        
    }else {
        if(averageGrade >= 5.5){
            console.log(`You get a scholarship for excellent results ${Math.floor(scolarshipForHighGrade)} BGN`);
        }else{
            console.log(`You cannot get a scholarship!`);
        }
    }
}scolarship([300.00,5.65,420.00])