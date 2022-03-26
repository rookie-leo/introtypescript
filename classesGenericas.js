// Classe Generica
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
function loggingId(arg) {
    alert(arg.length);
    return arg;
}
window.onload = function () {
    var genericNumber = new GenericNumber();
    genericNumber.zeroValue = 0;
    genericNumber.add = function (x, y) {
        return x + y;
    };
    document.getElementById('content').innerHTML = "The zero value is " + genericNumber.zeroValue + "<br> The add value is " + genericNumber.add(6, 7);
    var log = loggingId(["Yellow", "Green", "Blue", "Red", "Black"]);
    var textOut;
    for (var i = 0; i < log.length; i++) {
        textOut += log[i] + "<br>";
    }
    document.getElementById('color').innerHTML = textOut;
};
