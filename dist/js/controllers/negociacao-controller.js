export class NegociacaoController {
    constructor() {
        // os inputs de data, quantidade e valor serão o que o usuário digitou nos campos correspondentes
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        console.log(this.inputData);
        console.log(this.inputQuantidade);
        console.log(this.inputValor);
    }
}
