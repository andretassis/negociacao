export function tempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
