var input = require('readline-sync')

var nome = ''
var altura = 0
var peso = 0

do{
var nome = input.question('Informe seu nome: ');
if (!/^[\p{L}]+$/u.test(nome)) {
    console.log('Nome invalido:');
}
}while (!/^[\p{L}]+$/u.test(nome))

do{
var alturaInput = input.question('Informe sua altura em centrimetros: ');
altura = parseFloat(alturaInput);
if (isNaN(altura) || altura <= 40) {
    console.log('Altura inválida.');
}
}while (isNaN(altura) || altura <= 40)

do{
var pesoInput = input.question('Informe seu peso em Kilos: ');
peso = parseFloat(pesoInput);
if (isNaN(peso) || peso <= 0) {
    console.log('Peso inválido.');
}
}while (isNaN(peso) || peso <= 0)


let alturaMetros = altura / 100;

let ind = peso / (alturaMetros * alturaMetros);

function Analisador(ind){
    if (ind < 16)
        return 'Baixo peso muito grave';
    else if (ind >= 16 && ind <= 16.99 )
        return 'Baixo peso grave';
    else if (ind >= 17  && ind <= 18.49)
        return 'Baixo peso';
    else if (ind >= 18.50 && ind <= 24.99)
        return 'Peso normal';
    else if (ind >= 25 && ind <= 29.99)
        return 'Sobrepeso';
    else if (ind >= 30 && ind <= 34.99)
        return 'Obesidade grau I';
    else if (ind >= 35 && ind <= 39.99)
        return 'Obesidade grau II';
    else if (ind >= 40)
        return 'Obesidade grau III';
}

if (ind === Infinity || ind === 0)
    console.log(`ERRO`)
else
    console.log(`${nome} possui índice de massa corporal igual a ${ind.toFixed(2)}, sendo classificado comm: ${Analisador(ind)}.`);
