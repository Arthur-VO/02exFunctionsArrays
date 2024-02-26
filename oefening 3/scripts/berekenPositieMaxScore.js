export function berekenHoogsteScore(eendjes) {
    let positie = 0;
    let hoogsteScore = 0;
    for (let i = 0; i <= eendjes.length-4; i++) {
        const score = eendjes.slice(i, i+4).reduce((accumulator, currentValue) => accumulator + currentValue);
        if (score>hoogsteScore) {
            positie = i+1;
            hoogsteScore = score;
        }
    }
    console.log(`De hoogste score is ${hoogsteScore}`);
    return positie;
}