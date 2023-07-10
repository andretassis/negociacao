import { View } from "./views.js";
export class NegociacaoMensagem extends View {
    template(model) {
        return `
            <p class="alert alert-success">${model}</p>
        `;
    }
}
