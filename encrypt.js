class Encrypt {
    constructor(word) {
        this.word = word;
        let a;
        for (let i = 0; i < this.word.length; i++) {

            // from A to Z is 65-90 decimal
            a = this.word.charCodeAt(i) - 64; // convert ASCII decimal into alfabet

            // reverse alfabet decimal
            a = 27 - a;
            console.log(a);
        }
    }
}

export { Encrypt };