// Generic Type
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interface
interface GenericEcho {
    <T>(arg: T): T;
}

function echo<T>(arg: T): T {
    return arg;
}

window.onload = () => {

    let random: number = Math.floor(Math.random() * 10);

    // Generic Type
    let myIdentity: <U>(arg: U) => U = identity;
    document.getElementById('content').innerHTML = myIdentity<string>(random %2 == 0 ? "Par" : "Impar");

    // Generic Interface
    random =  Math.floor(Math.random() * 10);
    let myEcho: GenericEcho = echo;
    document.getElementById('color').innerHTML = myEcho<string>(random % 2 == 0 ? "Par" : "Impar");
};