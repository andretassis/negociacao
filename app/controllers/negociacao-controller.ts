import { inspecionar } from "../decorators/inspecionar.js";
import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { NegociacoesAPI } from "../interfaces/negociacoesAPI.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { imprimir } from "../utilidades/imprimir.js";
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

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    // adiciona uma nova negociação
    @inspecionar()
    @tempoDeExecucao()
    public adiciona(): void {
        const negociacao = this.criarNegociacao()
        if (negociacao.data.getDay() > DiasDaSemana.DOMINGO && negociacao.data.getDay() < DiasDaSemana.SABADO) {
            this.negociacoes.adiciona(negociacao);
            imprimir(negociacao);
            this.atualizaView();
            this.limparFormulario();
        } else {
            this.negociacaoMensagem.update('Apenas negociações em dias úteis são aceitas.')
        }
    }

    public importar(): void {
        fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dadosAPI: Array<NegociacoesAPI>) => {
                return dadosAPI.map((dado) => {
                    return new Negociacao(
                        new Date(),
                        dado.vezes,
                        dado.montante
                    )
                })
            })
            .then(negociacoesAPI => {
                return negociacoesAPI.filter(negociacoesAPI => {
                    return !this.negociacoes
                        .lista()
                        .some(negociacao => negociacao.igual(negociacoesAPI))
                })
            })
            .then(negociacoesAPI => {
                for (let negociacao of negociacoesAPI) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes)
            })
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
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacaoMensagem.update('Negociação adicionada com sucesso!')
        this.negociacoesView.update(this.negociacoes);
    }

}
