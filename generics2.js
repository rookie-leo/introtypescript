// Generic Type
function identity(arg) {
    return arg;
}
function echo(arg) {
    return arg;
}
window.onload = function () {
    var random = Math.floor(Math.random() * 10);
    // Generic Type
    var myIdentity = identity;
    document.getElementById('content').innerHTML = myIdentity(random % 2 == 0 ? "Par" : "Impar");
    // Generic Interface
    random = Math.floor(Math.random() * 10);
    var myEcho = echo;
    document.getElementById('color').innerHTML = myEcho(random % 2 == 0 ? "Par" : "Impar");
};
