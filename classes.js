var Hello = /** @class */ (function () {
    function Hello(textIn) {
        this.helloText = textIn;
    }
    Hello.prototype.message = function () {
        return "Hello " + this.helloText;
    };
    return Hello;
}());
var Areas = /** @class */ (function () {
    function Areas() {
        this.pi = 3.14;
    }
    Areas.prototype.circle = function (radius) {
        return this.pi * radius * radius;
    };
    Areas.prototype.rectangle = function (height, width) {
        return height * width;
    };
    Areas.prototype.square = function (side) {
        return side * side;
    };
    return Areas;
}());
window.onload = function () {
    var hello = new Hello("World!");
    alert(hello.message());
    var circle = new Areas();
    document.getElementById('content').innerHTML = "The circle area is " + circle.circle(5);
};
//# sourceMappingURL=classes.js.map