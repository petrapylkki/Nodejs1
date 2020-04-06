const tulostaTahtia = (maara) => {
    console.log("* ".repeat(maara));
}

const tulostaTulos = (tulos) => {
    let viiva = "-".repeat(tulos.toString().length);
    console.log(viiva + "\n" + tulos + "\n" + viiva);
}

tulostaTahtia(10);
tulostaTulos("Tämä on lopputulos");
tulostaTulos(34523452);

module.exports = {
    tulostaTahtia,
    tulostaTulos
};