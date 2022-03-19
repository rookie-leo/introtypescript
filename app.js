var Produto = /** @class */ (function () {
    function Produto(_codigo, _descricao, _preco) {
        this._codigo = _codigo;
        this.descricao = _descricao;
        this.preco = _preco;
    }
    Object.defineProperty(Produto.prototype, "codigo", {
        get: function () {
            return this._codigo;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.getDados = function () {
        return "Produto " + this.codigo + ": " + this.descricao + " - R$ " + this.preco;
    };
    return Produto;
}());
