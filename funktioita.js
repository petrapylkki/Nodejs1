const { tulostaTahtia, tulostaTulos } = require('./tulostus');

tulostaNelio = (sivu) => {
    for (i = 0; i < sivu; i++) {
        tulostaTahtia(sivu)
    }
};

tulostaSuorakulmio = (leveys, korkeus) => {
    for (i = 0; i < korkeus; i++) {
        tulostaTahtia(leveys)
    }
};

tulostaKolmio = (korkeus) => {
    for (i = 0; i < korkeus; i++) {
        tulostaTahtia(i + 1)
    }
};

lukusarjanSumma = (n) => {
    let luku = 1;
    let summa = 0;
    while (luku <= n) {
        summa = summa + luku;
        luku++;
    }
    return summa;
}

kertoma = (n) => {
    let summa = n;
    while (n > 1) {
        n--;
        summa = summa * n;
    }
    return summa;
}

tulostaNelio(4);
tulostaSuorakulmio(5, 3);
tulostaKolmio(5);
tulostaTulos(lukusarjanSumma(100));
tulostaTulos(kertoma(20));

module.exports = {
    tulostaKolmio,
    tulostaNelio,
    tulostaSuorakulmio,
    lukusarjanSumma, 
    kertoma
}