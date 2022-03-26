"use strict";
exports.__esModule = true;
exports.Module1 = void 0;
var Module1;
(function (Module1) {
    var Calculator;
    (function (Calculator) {
        var ClacArea = /** @class */ (function () {
            function ClacArea() {
            }
            ClacArea.prototype.getArea = function (radius) {
                var area = calcCircleArea(radius);
                console.log("Area: " + area);
                return area;
            };
            return ClacArea;
        }());
        Calculator.ClacArea = ClacArea;
    })(Calculator = Module1.Calculator || (Module1.Calculator = {}));
})(Module1 = exports.Module1 || (exports.Module1 = {}));
