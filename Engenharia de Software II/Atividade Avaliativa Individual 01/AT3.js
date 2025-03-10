var input = require('readline-sync')

var nota1 = 0
var peso1 = 2
var nota2 = 0
var peso2 = 5
var nota3 = 0
var peso3 = 3
var mediaFinal = ''

do{
var nota1 = parseFloat(input.question('Informe sua nota em atividades praticas de 0 a 10: '));
if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
    console.log('Nota inválida');
}
}while (isNaN(nota1) || nota1 < 0 || nota1 > 10)

do{ 
var nota2 = parseFloat(input.question('Informe sua nota na prova do semestre 0 a 10: '));
if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
    console.log('Nota inválida');

}
}while (isNaN(nota2) || nota2 < 0 || nota2 > 10)

do{
var nota3 = parseFloat(input.question('Informe sua nota no trabalho teorico 0 a 10: '));
if (isNaN(nota3) || nota3 < 0 || nota3 > 10) {
    console.log('Nota inválida');
}
}while (isNaN(nota3) || nota3 < 0 || nota3 > 10)

let media = ((peso1 * nota1) + (peso2*nota2)+(peso3*nota3))/ (peso1 + peso2 + peso3)

function Classificador(media){
    if (media >= 0  && media < 5)
        return 'F';
    else if (media >= 5 && media < 6)
        return 'E';
    else if (media >= 6 && media < 7)
        return 'D';
    else if (media >= 7 && media < 8)
        return 'C';
    else if (media >= 8 && media < 9)
        return 'B';
    else if (media >= 9 && media <= 10)
        return 'A';
}

console.log(`a media do aluno é = ${media.toFixed(2)}, e sua classificação é = ${Classificador(media)}`);
