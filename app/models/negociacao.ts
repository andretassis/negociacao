// cria uma class Negociacao e exporta
export class Negociacao {

    // os valores de data, quantidade e valor não podem ser alterados após a criação de uma negociação
    private _data;
    private _quantidade;
    private _valor;

    // atribui valores de data, quantidade e valor aos campos da negociação
    constructor(data, quantidade, valor) {
        this._data = data
        this._quantidade = quantidade
        this._valor = valor
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}
