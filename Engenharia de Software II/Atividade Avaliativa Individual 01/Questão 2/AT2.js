var input = require('readline-sync')

var frase = 0

do{
var idade = parseFloat(input.question('Informe sua idade: '));
if (isNaN(idade) || idade <= 0) {
    console.log('Idade inválida');
}
}while (isNaN(idade) || idade <= 0)

function Analisador(frase){
    if (idade >= 0 && idade < 15 )
        return 'Criança';
    else if (idade >= 15  && idade < 30)
        return 'Jovem';
    else if (idade >= 30 && idade < 60)
        return 'Adulto';
    else if (idade >= 60)
        return 'Idoso';
}

console.log(Analisador(frase));
