import Descritor from "./descritorEmpresa";
import Empresa from "./empresa";
import Funcionario from "./funcionario";
import Telefone from "./telefone";
import Endereco from "./endereco";

let endereco = new Endereco(123,'Av. Paulista','Jardim Paulista','São Paulo')
let telefone = new Telefone('011','9-9999-9999')
let funcionario = new Funcionario('Tony Stark','123456789','99999.9999.9999.-99',endereco,telefone)
let funcionarios = [funcionario]
let empresa = new Empresa(funcionarios,endereco,'ABC LTDA','Mercado online','999-999-999-99',telefone)

let descritor = new Descritor();
console.log(descritor.descrever(empresa));