const math = require('./modules/math');
const welcome = require('./modules/welcome');
const tanggal = require('./modules/tanggal');
const convert = require('./modules/convert');

// Menggunakan modul-modul yang telah dibuat
console.log('=== Aplikasi Modular Node.js ===\n');

console.log(welcome.sayHello('Bagas Prasetyo Nugroho'));
console.log(`Hari ini adalah: ${tanggal.getToday()}\n`);

console.log('Operasi Matematika:');
console.log(`hasil dari 10 + 9 = ${math.tambah(10, 9)}`);
console.log(`hasil dari 7 - 5 = ${math.kurang(7, 5)}`);
console.log(`hasil dari 5 * 5 = ${math.kali(5, 5)}`);
console.log(`hasil dari 50 / 10 = ${math.bagi(20, 5)}\n`);

console.log('Konversi Satuan:');
console.log(`31°C = ${convert.celciusToFahrenheit(31)}°F`);
console.log(`7 Kilometer = ${convert.kilometersToMeters(7)} Meter`);