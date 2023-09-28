const readline = require('readline');
const Encrypt = require('encrypt');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let encrypted;


rl.question('Masukkan sebuah kata: ', (teks) => {
    try {
        encrypted = new Encrypt(teks);
        console.log(encrypted);
    } catch (error) {
        console.log(error);
    } finally {
        rl.close();
    }
});