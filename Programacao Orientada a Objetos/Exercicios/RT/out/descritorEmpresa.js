"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        var dadosEmpresa = this.empresaFormatada(empresa);
        var dadosFuncionarios = this.funcionariosFormatado(empresa.funcionarios);
        return "".concat(dadosEmpresa, "\n  -----------------------------------\n  Funcion\u00E1rios:\n  ").concat(dadosFuncionarios);
    };
    Descritor.prototype.empresaFormatada = function (empresa) {
        return "Raz\u00E3o social: ".concat(empresa.razaoSocial, "\n  Nome fantasia: ").concat(empresa.nomeFantasia, "\n  CNPJ: ").concat(empresa.cnpj, "\n  Endere\u00E7o: ").concat(empresa.endereco.toString(), "\n  Telefone: ").concat(empresa.telefone.toString());
    };
    Descritor.prototype.funcionariosFormatado = function (funcionarios) {
        var _this = this;
        return funcionarios
            .map(function (funcionario) { return _this.formatarFuncionario(funcionario); })
            .join("\n\n");
    };
    Descritor.prototype.formatarFuncionario = function (funcionario) {
        return "Nome: ".concat(funcionario.nome, "\n  Matr\u00EDcula: ").concat(funcionario.matricula, "\n  CPF: ").concat(funcionario.cpf, "\n  Endere\u00E7o: ").concat(funcionario.endereco.toString(), "\n  Telefone: ").concat(funcionario.telefone.toString());
    };
    return Descritor;
}());
exports.default = Descritor;
