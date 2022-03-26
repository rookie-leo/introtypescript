/* Any - utilizado quando sabemos o tipo de dado que iremos utilizar,
 pode ser considerado um tipo não estático, pois pode receber mais de um tipo */
var qualquer = "Dados String";
qualquer = 5;
qualquer = true;
// Void
function aviso() {
    console.log("Mensagem de aviso");
}
// Null e Undefined
var u = undefined;
var n = null;
// Never
// Funções que retornam 'never' devem possuir um final inalcançável
var mensagem = "Erro! ";
function error(message) {
    throw new Error(mensagem);
}
// O tipo inferido é never
function fail() {
    return error("Algo falhou!");
}
function infinitLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
//# sourceMappingURL=mais.js.map