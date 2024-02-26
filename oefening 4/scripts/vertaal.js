export function vertaal(tekst) {
    const klinkers = "aeiou";
    let resultaat = "";
    for (let i = 0; i < tekst.length; i++) {
        console.log("Huidige letter:",tekst[i]);
        if (isKlinker(tekst[i])) {
            if (isKlinker(tekst[i-1])) {
                console.log("Deel van voorgaand klinkerpaar");
                continue;
            } else {
                console.log(tekst[i],"is een klinker");
                if (isKlinker(tekst[i+1])) {
                    console.log(tekst[i+1],"is een klinker");
                    const klinkerpaar = tekst.substring(i,i+2);
                    resultaat += klinkerpaar.concat("p".concat(klinkerpaar.toLowerCase()));
                } else {
                    console.log(tekst[i+1],"is geen klinker");
                    const klinker = tekst[i]
                    resultaat += klinker.concat("p".concat(klinker.toLowerCase()));
                }
            }
        } else {
            console.log(tekst[i],"is geen klinker");
            resultaat += tekst[i];
        }
        console.log("Resultaat:",resultaat);
    }
    return resultaat;
}

function isKlinker(letter) {
    const klinkers = "aeiouAEIOU";
    return klinkers.includes(letter);
}