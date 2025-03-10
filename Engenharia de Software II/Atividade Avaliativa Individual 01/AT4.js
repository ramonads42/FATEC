var input = require('readline-sync')

var numPecas = 0
var regiao = 0
var rastrea = ''
var frete1 = 1.00
var frete2 = 1.20
var frete3 = 1.30
var taxaRastreamento = 200

do{
var numPecas = parseInt(input.question('Qual o numero de pecas? '));
if (isNaN(numPecas) || numPecas <= 0){
    console.log('Numero de pecas invalido.');
}
}while (isNaN(numPecas) || numPecas <= 0)

do{
var regiao = parseInt(input.question('Qual regiao?(1, 2 ou 3) '));
if (regiao !== 1 && regiao !== 2 && regiao !== 3){
    console.log('Regiao invalida.');
}
}while (regiao !== 1 && regiao !== 2 && regiao !== 3)

do{
var distancia = parseFloat(input.question('Qual a distancia em metros? '));
if (isNaN(distancia) || distancia <= 0) {
    console.log('Distancia invalida.');
}
}while (isNaN(distancia) || distancia <= 0)

do{
var rastrea = input.question('Quer rastreamento? Sim ou Nao: ');
if (!['sim', 'não', 'nao'].includes(rastrea.toLowerCase())) {
    console.log('Resposta invalida')
}
}while (!['sim', 'não', 'nao'].includes(rastrea.toLowerCase())) 

function Calculador(){
    let preco = 0;
    if (numPecas<=1000){
    if (regiao == 1)
        return numPecas*frete1
    else if (regiao == 2)
        return numPecas*frete2
    else if (regiao == 3)
        return numPecas*frete3
    }
    else if (numPecas >1000){
    let pecasExtra = numPecas - 1000;
    if (regiao == 1) preco = (1000*frete1) + (pecasExtra * (frete1 * 0.90));
    else if (regiao == 2) preco = (1000*frete2) + (pecasExtra * (frete2 * 0.88));
    else if (regiao == 3) preco = (1000*frete3) + (pecasExtra * (frete3 * 0.87));
    }
    return preco
}

function Rastreador(precoFrete){
    if (rastrea === 'SIM' || rastrea === 'sim' || rastrea ===  'Sim'){
        return precoFrete + taxaRastreamento;
    }
    return precoFrete;
}

function calcularFrete(distancia, precoPecas, rastreamento) {
    let distanciaEmKm = distancia / 1000;
    let custoPorKm = distanciaEmKm * (regiao === 1 ? frete1 : regiao === 2 ? frete2 : frete3);
    let custoTotal = precoPecas + custoPorKm + (rastreamento === 'SIM' || rastreamento === 'sim' || rastreamento ===  'Sim' ? taxaRastreamento : 0);
    return { custoPorKm, custoTotal };
}

let preco = Calculador();
let precoFrete = Calculador();
let precoComRastreamento = Rastreador(precoFrete);
let { custoPorKm, custoTotal } = calcularFrete(distancia, precoComRastreamento, rastrea.toLowerCase() === 'sim');
console.log('');
console.log(`Taxa de rastreamento: R$${rastrea === 'SIM' || rastrea === 'sim' || rastrea ===  'Sim' ? taxaRastreamento : 0}`);
console.log(`Valor do frete por quilômetro: R$${custoPorKm.toFixed(2)}`);
console.log(`Preço do frete das pecas: $R${precoFrete.toFixed(2)}`);
console.log(`Preço total do frete: R$${custoTotal.toFixed(2)}`)
