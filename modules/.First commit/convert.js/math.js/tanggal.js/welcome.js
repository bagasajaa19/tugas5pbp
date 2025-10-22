//convert.js
function celciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function kilometersToMeters(kilometers) {
    return kilometers * 1000;
}
module.exports = { celciusToFahrenheit, kilometersToMeters };

//math.js
function tambah(a, b) {
    return a + b;
}
function kurang(a, b) {
    return a - b;
} 
function kali(a, b) {
    return a * b;
}
function bagi(a, b) {
    return a / b;
}
module.exports = { tambah, kurang, kali, bagi };

//tanggal.js
function getToday(){
    const today = new Date();
    return today.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
module.exports = {getToday};

//welcome.js
function sayHello(name) {
    return `Hai, ${name}! Selamat Datang tuan raja`;
}
module.exports = {sayHello};


