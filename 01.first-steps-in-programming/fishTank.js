function fishTank(input) {
    let lenghtInCm = Number(input[0]);
    let wightInCm = Number(input[1]);
    let hightInCm = Number(input[2]);
    let percent = Number(input[3]);

    let volumeOfAquarium = lenghtInCm * wightInCm * hightInCm;
    let totalLitre = volumeOfAquarium * 0.001;
    let thePercent = percent / 100;
    let litreNeeded = totalLitre * (1 - thePercent);
    console.log(litreNeeded);
}