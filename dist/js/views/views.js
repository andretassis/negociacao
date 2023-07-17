export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Verifique o seletor ${seletor}.`);
        }
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
