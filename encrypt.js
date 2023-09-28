class Encrypt {
    constructor(word) {
        this.word = word;
        // C = Chipertext; P = Plaintext
        let P_Arr = [];
        let C_Arr = [];
        let C_word, P_word;
        let C_decimal, P_decimal;
        for (let i = 0; i < this.word.length; i++) {

            // in ASCII, from A to Z is 65-90 decimal
            // convert ASCII decimal into alfabet
            C_decimal = this.word.charCodeAt(i) - 64;
            P_decimal = this.word.charCodeAt(i) - 64;

            // ALGORITMA
            // reverse alfabet decimal
            C_decimal = 27 - C_decimal;

            
            // transform decimal alfabet to decimal ASCII
            C_word = String.fromCharCode(C_decimal + 64);
            P_word = this.word[i];
            
            // Added to array
            P_Arr.push({P_word, P_decimal});
            C_Arr.push({C_word, C_decimal});
            
        }
        console.log("Plaintext: ", P_Arr);
        console.log("Chipertext: ", C_Arr);
    }
}

module.exports = Encrypt;