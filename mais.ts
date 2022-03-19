/* Any - utilizado quando sabemos o tipo de dado que iremos utilizar,
 pode ser considerado um tipo não estático, pois pode receber mais de um tipo */
let qualquer: any = "Dados String";
qualquer = 5;
qualquer = true;

// Void
function aviso(): void {
    console.log("Mensagem de aviso");
}

// Null e Undefined
let u: undefined = undefined;
let n: null = null;

// Never
// Funções que retornam 'never' devem possuir um final inalcançável
function error(message: string): never {
    throw new Error(mensagem);
}

// O tipo inferido é never
function fail() {
    return error("Algo falhou!");
}

function infinitLoop(): never {
    while (true) {
    }
}

// Object
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);