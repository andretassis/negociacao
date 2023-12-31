var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspecionar } from "../decorators/inspecionar.js";
import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { imprimir } from "../utilidades/imprimir.js";
import { NegociacaoMensagem } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoes-view");
        this.negociacaoMensagem = new NegociacaoMensagem("#mensagem-view");
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        if (negociacao.data.getDay() > DiasDaSemana.DOMINGO && negociacao.data.getDay() < DiasDaSemana.SABADO) {
            this.negociacoes.adiciona(negociacao);
            imprimir(negociacao);
            this.atualizaView();
            this.limparFormulario();
        }
        else {
            this.negociacaoMensagem.update('Apenas negociações em dias úteis são aceitas.');
        }
    }
    importar() {
        fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dadosAPI) => {
            return dadosAPI.map((dado) => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        })
            .then(negociacoesAPI => {
            return negociacoesAPI.filter(negociacoesAPI => {
                return !this.negociacoes
                    .lista()
                    .some(negociacao => negociacao.igual(negociacoesAPI));
            });
        })
            .then(negociacoesAPI => {
            for (let negociacao of negociacoesAPI) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
    criarNegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacaoMensagem.update('Negociação adicionada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
    }
}
__decorate([
    inspecionar(),
    tempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
