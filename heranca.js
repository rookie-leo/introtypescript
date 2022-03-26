var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return "Product: " + this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.PriceWithDiscount = function (discount) {
        if (discount === void 0) { discount = 0; }
        var finalPrice = this.price - ((this.price * discount) / 100);
        alert(this.name + " : $" + finalPrice);
    };
    return Product;
}());
var TV = /** @class */ (function (_super) {
    __extends(TV, _super);
    function TV(name, price, size) {
        var _this = _super.call(this, name, price) || this;
        _this.size = size;
        return _this;
    }
    TV.prototype.PriceWithDiscount = function (discount) {
        alert("TV size: " + this.size + " pol");
        _super.prototype.PriceWithDiscount.call(this, discount);
    };
    return TV;
}(Product));
window.onload = function () {
    var product = new Product("Table", 1899.99);
    product.PriceWithDiscount(10);
    var tv = new TV("TV", 1250.99, 52);
    tv.setName = "SAMSUNG"; //set
    tv.getName; //get
    tv.PriceWithDiscount(5);
};
//# sourceMappingURL=heranca.js.map