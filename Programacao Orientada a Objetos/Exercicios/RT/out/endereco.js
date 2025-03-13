"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(numero, rua, bairro, cidade) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    Endereco.prototype.toString = function () {
        return "".concat(this.rua, ", ").concat(this.numero, " - ").concat(this.bairro, ", ").concat(this.cidade);
    };
    return Endereco;
}());
exports.default = Endereco;
