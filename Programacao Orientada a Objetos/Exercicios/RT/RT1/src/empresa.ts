import Endereco from "./endereco";
import Telefone from "./telefone";
import Funcionario from "./funcionario";



export default class Empresa{
    public razaoSocial: string;
    public nomeFantasia: string;
    public cnpj: string
    public endereco: Endereco;
    public funcinarios: Funcionario[];
    public telefone: Telefone;

    constructor(public funcionarios: Funcionario[], endereco: Endereco, razaoSocial: string, nomeFantasia: string, cnpj: string, telefone: Telefone) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.telefone = telefone
        }
}

