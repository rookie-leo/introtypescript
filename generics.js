function echo(arg) {
    alert(arg.length);
    return arg;
}
window.onload = function () {
    document.getElementById('content').innerHTML = echo(["Hello World!", "Aula TypeScript", "Teste"])[1];
};
