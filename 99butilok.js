//1.создание функции 99 бутылок
//2.создание условного оператора

function bottle (number) {
    if (number === 1) {
        return `${number} бутылка `
    } else if (number > 1 && number < 5) {
        return  `${number} бутылки `
    } else if (number >= 5 && number < 21) {
        return `${number} бутылок `
    } else if (number % 10 === 1) {
        return `${number} бутылка `
    } else if (number % 10 > 1 && number % 10 < 5 ) {
        return `${number} бутылки `
    } else if (number % 10 > 4 && number % 10 <= 9) {
        return `${number} бутылок `
    } else if (number % 10 === 0) {
        return `${number} бутылок`
    } 
};
function generateSongText(number) {
    console.log(`${bottle(number)} на стене, ${bottle(number)} пива!
    Возьму одну, пусти по кругу, ${bottle(number - 1)} пива на стене`);
}

function generateSingleStanza(number) {
    for (number; 1 <= number; number-- ) {
        generateSongText(number)
    }
}
generateSingleStanza(99)