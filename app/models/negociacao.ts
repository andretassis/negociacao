// cria uma class Negociacao e exporta
export class Negociacao {

    // os valores de data, quantidade e valor não podem ser alterados após a criação de uma negociação
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    // atribui valores de data, quantidade e valor aos campos da negociação
    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data
        this._quantidade = quantidade
        this._valor = valor
    }

    // retorna a data
    get data(): Date {
        return this._data;
    }

    // retorna a quantidade
    get quantidade(): number {
        return this._quantidade;
    }

    // retorna o valor
    get valor(): number {
        return this._valor;
    }

    // retorna o volume de negociação
    get volume(): number {
        return this._quantidade * this._valor;
    }
}
