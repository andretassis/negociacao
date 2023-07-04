import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        // os inputs de data, quantidade e valor serão o que o usuário digitou nos campos correspondentes
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    // adiciona uma nova negociação
    adiciona() {
        const negociacao = this.criarNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    // cria uma nova negociação convertendo os dados digitados nos inputs para os tipos corretos
    criarNegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    // limpa o formulário e retorna o foco para o input de data
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
