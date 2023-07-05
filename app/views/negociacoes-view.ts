import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento: HTMLElement;

    // obtem o elemento do DOM onde será renderizada a tabela
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    // define a estrutura da view
    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                ${model.lista().map(negociacao => {
            return `
                    <tr>
                        <td>?</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `
        })}
                </tbody>
            </table>
        `;
    }

    //atualiza a estrutura da view
    update(model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model);
    }
}