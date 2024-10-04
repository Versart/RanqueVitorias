export default class Heroi {

    constructor(vitoria,derrota) {
        this._vitoria = vitoria;
        this._derrota = derrota;
    }

    get vitoria() {
        return this._vitoria;
    }

    get derrota() {
        return this._derrota;
    }
}