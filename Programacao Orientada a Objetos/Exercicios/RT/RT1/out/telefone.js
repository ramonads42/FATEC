"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefone = /** @class */ (function () {
    function Telefone(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    Telefone.prototype.toString = function () {
        return "(".concat(this.ddd, ") ").concat(this.numero);
    };
    return Telefone;
}());
exports.default = Telefone;
