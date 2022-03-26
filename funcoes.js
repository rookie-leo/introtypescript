window.onload = function () {
    function showMessage(message) {
        alert("The message is: " + message);
    }
    function sum(x, y) {
        return x + y;
    }
    function trueOrFalse(num) {
        if (num < 10) {
            return true;
        }
        else {
            return false;
        }
    }
    showMessage("The sum result is " + sum(5, 2));
    document.getElementById('content').innerHTML = "This number is less than ten? " + trueOrFalse(11);
    // Function Type
    var myAdd = function (x, y) {
        return x + y;
    };
    document.getElementById('content').innerHTML = "The sum of the function type is " + myAdd(5, 12);
    // Parametro opcional
    function addNumber(num1, num2, num3) {
        var result;
        if (isNaN(num3)) {
            result = num1 + num2;
        }
        else {
            result = num1 + num2 + num3;
        }
        return result;
    }
    document.getElementById('content').innerHTML = "The sum of the optional parameter is " + addNumber(2, 3);
    // Parametro padrão
    function multiply(num1, num2, num3) {
        if (num3 === void 0) { num3 = 1; }
        var result = num1 * num2 * num3;
        return result;
    }
    document.getElementById('content').innerHTML = "The result of the optional parameter is " + multiply(3, 3);
    // Parametro REST
    function buildName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var name = buildName("Leonardo", "Paulino", "Pereira", "Pontes", "Portela", "de Araujo");
    document.getElementById('content').innerHTML = name;
    function calculateArea(x, y) {
        var result;
        if (y > 0) {
            result = x * y;
        }
        else {
            result = x * x;
        }
        return result;
    }
    var result = calculateArea(12, 6);
    document.getElementById('content').innerHTML = "The result of the calculate area is " + result;
    // Arrow Function
    var resultSum = function (x, y, z) {
        var result;
        if (isNaN(z)) {
            result = x + y;
        }
        else {
            result = x + y + z;
        }
        return result;
    };
    document.getElementById('content').innerHTML = "The result of sum is " + resultSum(7, 5);
    // Simple Arrow Function
    var resultSum1 = function (x, y, z) { return x + y + z; };
    document.getElementById('content').innerHTML = "Simple Arrow Function " + resultSum1(1, 2, 3);
};
//# sourceMappingURL=funcoes.js.map