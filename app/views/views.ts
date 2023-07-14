import { inspecionar } from "../decorators/inspecionar.js";
import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";

// cria uma parte de código que pode ser reaproveitado por elementos filhos para evitar repetições
export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement
        } else {
            throw Error(`Verifique o seletor ${seletor}.`)
        }
    }

    @tempoDeExecucao()
    @inspecionar()
    public update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string
}