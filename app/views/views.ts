// cria uma parte de código que pode ser reaproveitado por elementos filhos para evitar repetições
export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }

    abstract template(model: T): string
}