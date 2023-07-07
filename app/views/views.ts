// cria uma parte de código que pode ser reaproveitado por elementos filhos para evitar repetições
export class View {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
}