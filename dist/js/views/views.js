// cria uma parte de código que pode ser reaproveitado por elementos filhos para evitar repetições
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
