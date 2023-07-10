import { View } from "./views.js";

export class NegociacaoMensagem extends View<string> {

    template(model: string): string {
        return `
            <p class="alert alert-success">${model}</p>
        `
    }
}
