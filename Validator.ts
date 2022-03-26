export module Validator {
     export interface StringValidator {
        isValidate(str: string): boolean;
    }

    let chasrRegexp = /^[A-Za-z]+$/;// checa se é somente caracteres
    let cepRegexp = /^[0-9]+$/;// checa se são numeros de 0 a 9

    export class LettersOnlyValidator implements StringValidator{
        isValidate(str: string): boolean {
            return chasrRegexp.test(str);
        }
    }

    export class CepValidator implements StringValidator {
        isValidate(str: string): boolean {
            return str.length === 8 && cepRegexp.test(str);
        }
    }
}