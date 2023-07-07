import { View } from "./views.js";

export class NegociacaoMensagem extends View {

    template(model: string): string {
        return `
            <p class="alert alert-success">${model}</p>
        `
    }

    update(model: string): void {
        this.elemento.innerHTML = this.template(model);
    }
}
