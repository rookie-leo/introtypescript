define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Validator = void 0;
    var Validator;
    (function (Validator) {
        var chasrRegexp = /^[A-Za-z]+$/; // checa se é somente caracteres
        var cepRegexp = /^[0-9]+$/; // checa se são numeros de 0 a 9
        var LettersOnlyValidator = /** @class */ (function () {
            function LettersOnlyValidator() {
            }
            LettersOnlyValidator.prototype.isValidate = function (str) {
                return chasrRegexp.test(str);
            };
            return LettersOnlyValidator;
        }());
        Validator.LettersOnlyValidator = LettersOnlyValidator;
        var CepValidator = /** @class */ (function () {
            function CepValidator() {
            }
            CepValidator.prototype.isValidate = function (str) {
                return str.length === 8 && cepRegexp.test(str);
            };
            return CepValidator;
        }());
        Validator.CepValidator = CepValidator;
    })(Validator = exports.Validator || (exports.Validator = {}));
});
//# sourceMappingURL=Validator.js.map