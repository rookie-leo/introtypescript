window.onload = function () {
    var strings = ['Leonardo', '12345678', '123'];
    var validators = {};
    validators['ZIP code'] = new Validator.CepValidator();
    validators['Letters only'] = new Validator.LettersOnlyValidator();
    var result = "";
    strings.forEach(function (s) {
        for (var name_1 in validators) {
            result += '"' + s + '" ' + (validators[name_1].isValidate(s) ? ' matches ' : ' does not match ') + name_1 + "<br>";
        }
    });
    document.getElementById('content').innerHTML = result;
};
//# sourceMappingURL=modules.js.map