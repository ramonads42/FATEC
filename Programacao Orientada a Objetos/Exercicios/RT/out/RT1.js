var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Empresa_cnpj;
var Empresa = /** @class */ (function () {
    function Empresa(razaoSocial, nomeFantasia, cnpj, endereco) {
        _Empresa_cnpj.set(this, void 0);
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        __classPrivateFieldSet(this, _Empresa_cnpj, cnpj, "f");
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }
    Object.defineProperty(Empresa.prototype, "razaoSocialMaiusculo", {
        get: function () {
            return this.razaoSocial.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "razaoSocialMinusculo", {
        get: function () {
            return this.razaoSocial.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "nomeFantasiaMaiusculo", {
        get: function () {
            return this.nomeFantasia.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "nomeFantasiaMinusculo", {
        get: function () {
            return this.nomeFantasia.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "enderecoMaiusculo", {
        get: function () {
            return this.endereco.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "enderecoMinusculo", {
        get: function () {
            return this.endereco.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "pegarCnpj", {
        get: function () {
            return __classPrivateFieldGet(this, _Empresa_cnpj, "f");
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.adicionarCliente = function (cliente) {
        this.clientes.add(cliente);
    };
    return Empresa;
}());
_Empresa_cnpj = new WeakMap();
