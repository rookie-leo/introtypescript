function echo<T>(arg: T[]): T[] {
    alert(arg.length);
    return arg;
}

window.onload = () => {
    document.getElementById('content').innerHTML = echo<string>(["Hello World!", "Aula TypeScript", "Teste"])[1];
};