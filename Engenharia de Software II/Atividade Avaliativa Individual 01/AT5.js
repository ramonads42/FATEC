var input = require('readline-sync')

var categoria = ''
var turno = ''


console.log("1. R$ 800");
console.log("2. R$ 1100");
console.log("3. R$ 1300");



do {
    opcao = input.questionInt('Escolha o valor do salario minimo do seu estado: ');
    if (opcao !== 1 && opcao !== 2 && opcao !== 3) {
        console.log('Opçao invalida. Por favor, insira um numero valido.');
    }
} while (opcao !== 1 && opcao !== 2 && opcao !== 3);

var salario;
switch(opcao) {
    case 1:
        salario = 800;
        break;
    case 2:
        salario = 1100;
        break;
    case 3:
        salario = 1300;
        break;
    default:
}

do{
var codigo = input.question('Informe o codigo do funcionario: ');
if (isNaN(codigo) || codigo <0) {
    console.log('Codigo invalido. Por favor, insira um codigo valido.');
}
}while (isNaN(codigo) || codigo <0)

do{
var horas = parseFloat(input.question('Informe o numero de horas trabalhadas: '));
if (isNaN(horas) || horas < 0){
    console.log('Numero de horas invalido.');
}
}while (isNaN(horas) || horas < 0)

do{
var turno = input.question('Informe o turno(M = matutino, V = vespertino ou N = noturno): ');
turno = turno.toUpperCase();
if (turno !== 'M' && turno !== 'V' && turno !== 'N') {
    console.log('Turno invalido. Por favor, insira M, V ou N.');
}
}while (turno !== 'M' && turno !== 'V' && turno !== 'N')

do{
var categoria = input.question('Informe a categoria (F = funcionario, G = gerente):')
categoria = categoria.toUpperCase();
if (categoria !== "F" && categoria !== "G"){
    console.log('Categoria invalida. Por favor, insira F ou G.');
}
}while (categoria !== "F" && categoria !== "G")

function CalculadorValorDaHora(){

    if (categoria == 'G') {
        if (turno == 'M' || turno == 'V'){
            return (salario * 0.04);
        }
        else if (turno == 'N'){
            return (salario * 0.05);
        }
    } else if (categoria == 'F') {
        if (turno == 'M' || turno == 'V'){
            return (salario * 0.01);
        } else if (turno == 'N'){
            return (salario * 0.02);
        }
    }
    return 0
}


let valorDaHora = CalculadorValorDaHora();
let salarioInicial = valorDaHora * horas;



///auxilio
function CalcularAuxilio(){
    if (salarioInicial <= 800){
        return salarioInicial * 0.25
}else if (salarioInicial <= 1200){
        return salarioInicial * 0.20
}
return salarioInicial * 0.15
}

let auxilio = CalcularAuxilio();
let salarioFinal = salarioInicial + auxilio;
console.log(``)
console.log(`Codigo do funcionario: ${codigo}`)
console.log(`Numero de horas trabalhadas: ${horas}`)
console.log(`Valor da hora trabalhada: R$${valorDaHora}`)
console.log(`Salario inicial: R$${salarioInicial.toFixed(2)}`)
console.log(`Auxilio alimentaçao: R$${auxilio.toFixed(2)}`);
console.log(`Salario final: R$${salarioFinal.toFixed(2)}`)

