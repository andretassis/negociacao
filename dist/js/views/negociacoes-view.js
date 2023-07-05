export class NegociacoesView {
    // obtem o elemento do DOM onde será renderizada a tabela
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // define a estrutura da view
    template(model) {
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
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `;
        })}
                </tbody>
            </table>
        `;
    }
    //atualiza a estrutura da view
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
