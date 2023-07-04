import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {

    // cria os inputs de data, quantidade e valor de forma privada
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes()

    constructor() {
        // os inputs de data, quantidade e valor serão o que o usuário digitou nos campos correspondentes
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    // adiciona uma nova negociação
    adiciona(): void {
        const negociacao = this.criarNegociacao()
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    // cria uma nova negociação convertendo os dados digitados nos inputs para os tipos corretos
    criarNegociacao(): Negociacao {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(data, quantidade, valor)
    }

    // limpa o formulário e retorna o foco para o input de data
    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
