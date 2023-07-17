import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController;
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Verifique se o form existe.');
}
const importar = document.querySelector('#btn-importar');
if (importar) {
    importar.addEventListener('click', () => {
        controller.importar();
    });
}
else {
    throw Error('Botão não encontrado!');
}
