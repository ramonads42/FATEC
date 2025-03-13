"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var descritorEmpresa_1 = __importDefault(require("./descritorEmpresa"));
var empresa_1 = __importDefault(require("./empresa"));
var funcionario_1 = __importDefault(require("./funcionario"));
var telefone_1 = __importDefault(require("./telefone"));
var endereco_1 = __importDefault(require("./endereco"));
var endereco = new endereco_1.default(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
var telefone = new telefone_1.default('011', '9-9999-9999');
var funcionario = new funcionario_1.default('Tony Stark', '123456789', '99999.9999.9999.-99', endereco, telefone);
var funcionarios = [funcionario];
var empresa = new empresa_1.default(funcionarios, endereco, 'ABC LTDA', 'Mercado online', '999-999-999-99', telefone);
var descritor = new descritorEmpresa_1.default();
console.log(descritor.descrever(empresa));
