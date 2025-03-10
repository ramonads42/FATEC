var input = require('readline-sync')

do{
var numero1 = parseInt(input.question('Insira um numero: '));
if (isNaN(numero1)){
    console.log('Numero invalido.');
}
}while (isNaN(numero1))

do{
    var operacao = input.question('Escolha a operaçao (soma ou subtracao): ');
    if (operacao !== 'soma' && operacao !== 'subtracao'){
        console.log('Operaçao invalida.');
    }
}while (operacao !== 'soma' && operacao !== 'subtracao')

do{
var numero2 = parseInt(input.question('Insira um numero: '));
if (isNaN(numero2)){
    console.log('Numero invalido.');
}
}while (isNaN(numero2))

function calculador(){
    if (operacao === 'soma'){
        return numero1 + numero2
    }
    else if (operacao === 'subtracao'){
        return numero1 - numero2
    }
}

console.log(`O resultado é: ${calculador()}`)
