class Nome{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefone = new Set()
        this.#cpf = cpf
    }
    get pegarCpf(){
        return this.#cpf
    }
    set criarNome(novoNome){
        this.nome = novoNome;
    }
    get nomeMaiusculo() {
        return this.nome.toUpperCase();
    }
    get nomeMinusculo() {
        return this.nome.toLowerCase();
    }
    get enderecoMaiusculo() {
        return this.endereco.toUpperCase();
    }
    get enderecoMinusculo() {
        return this.endereco.toLowerCase();
    }
    get cpfMaiusculo() {
        return this.#cpf.toUpperCase();
    }
    get cpfMinusculo() {
        return this.#cpf.toLowerCase();
    }
    

}

class Cliente extends Nome {
    constructor(nome, cpf, endereco) {
      super(nome, cpf, endereco);
    }
}

class Telefone {
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
    toString() {
        return `(${this.ddd})${this.numero}`;
    }
    get dddMaiusculo() {
        return this.ddd.toUpperCase();
    }
    get dddMinusculo() {
        return this.ddd.toLowerCase();
    }
    get numeroMaiusculo() {
        return this.numero.toUpperCase();
    }
    get numeroMinusculo() {
        return this.numero.toLowerCase();
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
    toString() {
        return `Estado: ${this.estado}, cidade: ${this.cidade}, rua: ${this.rua}, numero: ${this.numero}`;
    }
    get estadoMaiusculo() {
        return this.estado.toUpperCase();
    }
    get estadoMinusculo() {
        return this.estado.toLowerCase();
    }
    get cidadeMaiusculo() {
        return this.cidade.toUpperCase();
    }
    get cidadeMinusculo() {
        return this.cidade.toLowerCase();
    }
    get ruaMaiusculo() {
        return this.rua.toUpperCase();
    }
    get ruaMinusculo() {
        return this.rua.toLowerCase();
    }get numeroMaiusculo() {
        return this.numero.toUpperCase();
    }
    get numeroMinusculo() {
        return this.numero.toLowerCase();
    }
}

class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }
    get razaoSocialMaiusculo() {
        return this.razaoSocial.toUpperCase();
    }
    get razaoSocialMinusculo() {
        return this.razaoSocial.toLowerCase();
    }
    get nomeFantasiaMaiusculo() {
        return this.nomeFantasia.toUpperCase();
    }
    get nomeFantasiaMinusculo() {
        return this.nomeFantasia.toLowerCase();
    }
    get cnpjMaiusculo() {
        return this.#cnpj.toUpperCase();
    }
    get cnpjMinusculo() {
        return this.#cnpj.toLowerCase();
    }
    get enderecoMaiusculo() {
        return this.endereco.toUpperCase();
    }
    get enderecoMinusculo() {
        return this.endereco.toLowerCase();
    }

    get pegarCnpj(){
        return this.#cnpj
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

get cliente(){
    return Array.from(this.clientes).map(cliente => 
`Nome: ${cliente.nome} 
CPF: ${cliente.pegarCpf}
Endereco: ${cliente.endereco}
Telefones: 
${Array.from(cliente.telefone).map(tel => tel.toString()).join('\n')}
`).join('\n');
}

get telefonesFormat() {
    return Array.from(this.telefones).map(t => t.toString());
    }

    detalhe(){
        return `Razão social: ${this.razaoSocial} 
Nome fantasia: ${this.nomeFantasia}
Telefone: ${this.telefonesFormat}
Endereco: ${this.endereco}
Cnpj: ${this.#cnpj}
----------------------------------- 
${this.cliente}`
    }
}

///Criar empresa
const enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Av. Jardins', 635);
const empresa = new Empresa('Merc LTDA','Merc Free','1234567', enderecoEmpresa);

const telefoneEmp1 = new Telefone(12,426387);
const telefoneEmp11 = new Telefone(14,435327);
empresa.telefones.add(telefoneEmp1);
empresa.telefones.add(telefoneEmp11);

///Criar clientes
const enderecoCli1 = new Endereco('SP','São Paulo','São Jao',432);
const cliente1 = new Cliente('Carlos','12345678',enderecoCli1);
const telefoneCli1 = new Telefone(13,123454);
const telefoneCli11 = new Telefone(12,245467);
cliente1.telefone.add(telefoneCli1);
cliente1.telefone.add(telefoneCli11);

const enderecoCli2 = new Endereco('SP','São José dos Campos','Plata',432);
const cliente2 = new Cliente('Roberto','87654309',enderecoCli2);
const telefoneCli2 = new Telefone(12,598227);
const telefoneCli22 = new Telefone(11,369427);
cliente2.telefone.add(telefoneCli2);
cliente2.telefone.add(telefoneCli22);

const enderecoCli3 = new Endereco('SP','São José dos Campos','Meia',987);
const cliente3 = new Cliente('Verma','25437699',enderecoCli3);
const telefoneCli3 = new Telefone(25,234522);
const telefoneCli33 = new Telefone(11,354437);
cliente3.telefone.add(telefoneCli3);
cliente3.telefone.add(telefoneCli33);

const enderecoCli4 = new Endereco('SP','São José dos Campos','Meia',987);
const cliente4 = new Cliente('Roseli','23227765',enderecoCli3);
const telefoneCli4 = new Telefone(25,443218);
const telefoneCli44 = new Telefone(11,876784);
cliente4.telefone.add(telefoneCli4);
cliente4.telefone.add(telefoneCli44);

const enderecoCli5 = new Endereco('SP','Cacapava','Tralha',55);
const cliente5 = new Cliente('Manoel','23227765',enderecoCli5);
const telefoneCli5 = new Telefone(16,234321);
const telefoneCli55 = new Telefone(43,435798);
cliente5.telefone.add(telefoneCli5);
cliente5.telefone.add(telefoneCli55);

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);

console.log(empresa.detalhe())
