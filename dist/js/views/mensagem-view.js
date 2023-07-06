export class NegociacaoMensagem {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
            <p class="alert alert-success">${model}</p>
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
