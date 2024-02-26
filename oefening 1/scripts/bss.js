const keuzeGebruiker = prompt("Kies blad, steen of schaar").toLowerCase();
console.log("Gebruiker kiest",keuzeGebruiker);

const keuzeComputer = geefKeuzeComputer();
console.log("Computer kiest",keuzeComputer);

function geefKeuzeComputer() {
    const keuze = Math.random();
    if (keuze < (1/3)) {
        return "blad";
    } else if (keuze < (2/3)) {
        return "steen";

    } else {
        return "schaar";

    }
}

function geefResultaat(keuze1,keuze2) {
    const gebruikerWint = 
    (keuze1=="blad"&&keuze2=="steen")
    ||(keuze1=="steen"&&keuze2=="schaar")
    ||(keuze1=="schaar"&&keuze2=="blad");

    const computerWint = 
    (keuze1=="blad"&&keuze2=="schaar")
    ||(keuze1=="steen"&&keuze2=="blad")
    ||(keuze1=="schaar"&&keuze2=="steen");

    if (gebruikerWint) {
        return "Gebruiker wint!"
    } else if (computerWint) {
        return "Computer wint!"
    }
    else {
        return "Gelijkspel!"
    }
}

console.log(geefResultaat(keuzeGebruiker,keuzeComputer));