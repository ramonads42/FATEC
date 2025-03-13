export default class Descritor {
    public descrever(empresa: any): string {
      const dadosEmpresa = this.empresaFormatada(empresa);
      const dadosFuncionarios = this.funcionariosFormatado(empresa.funcionarios);
      
      return `${dadosEmpresa}
  -----------------------------------
  Funcionários:
  ${dadosFuncionarios}`;
    }
    
    empresaFormatada(empresa: any): string {
      return `Razão social: ${empresa.razaoSocial}
  Nome fantasia: ${empresa.nomeFantasia}
  CNPJ: ${empresa.cnpj}
  Endereço: ${empresa.endereco.toString()}
  Telefone: ${empresa.telefone.toString()}`;
    }
    
    funcionariosFormatado(funcionarios: any[]): string {
      return funcionarios
        .map(funcionario => this.formatarFuncionario(funcionario))
        .join("\n\n");
    }
    
    formatarFuncionario(funcionario: any): string {
      return `Nome: ${funcionario.nome}
  Matrícula: ${funcionario.matricula}
  CPF: ${funcionario.cpf}
  Endereço: ${funcionario.endereco.toString()}
  Telefone: ${funcionario.telefone.toString()}`;
    }
  }