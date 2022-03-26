var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
window.onload = function () {
    var square = {};
    square.color = "black";
    square.penWidth = 0.5;
    square.sideLength = 10;
    alert(square.color + " " + square.penWidth + " " + square.sideLength);
};
//# sourceMappingURL=classeType.js.map