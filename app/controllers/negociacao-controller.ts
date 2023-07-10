import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoMensagem } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";


export class NegociacaoController {

    // cria os inputs de data, quantidade e valor de forma privada
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoes-view");
    private negociacaoMensagem = new NegociacaoMensagem("#mensagem-view");

    // adiciona uma nova negociação
    adiciona(): void {
        const negociacao = this.criarNegociacao()
        this.negociacoes.adiciona(negociacao);
        this.negociacaoMensagem.update('Negociação adicionada com sucesso!')
        this.negociacoesView.update(this.negociacoes);
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
