window.onload = () => {
    let strings = ['Leonardo', '12345678', '123'];
    let validators: {[str: string]: Validator.StringValidator;} = {};

    validators['ZIP code'] = new Validator.CepValidator();
    validators['Letters only'] = new Validator.LettersOnlyValidator();

    let result: string = "";
    strings.forEach(s => {
        for (let name in validators) {
            result += '"' + s + '" ' +(validators[name].isValidate(s) ? ' matches ' : ' does not match ') + name + "<br>";
        }
    });

    document.getElementById('content').innerHTML = result;
};