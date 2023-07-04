// cria uma class Negociacao e exporta
export class Negociacao {
    // atribui valores de data, quantidade e valor aos campos da negociação
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    // retorna a data
    get data() {
        return this._data;
    }
    // retorna a quantidade
    get quantidade() {
        return this._quantidade;
    }
    // retorna o valor
    get valor() {
        return this._valor;
    }
    // retorna o volume de negociação
    get volume() {
        return this._quantidade * this._valor;
    }
}
