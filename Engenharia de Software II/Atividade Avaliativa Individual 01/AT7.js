var input = require('readline-sync')

function validarData(data) {
    const verifica = /^\d{2}\/\d{2}\/\d{4}$/;
    return verifica.test(data);
}

let data
do {
    data = input.question('Insira uma data (xx/xx/xxxx): ');

    if (!validarData(data)) {
        console.log('Data inválida');
    }
} while (!validarData(data));

let stringSeparada = data.split('/')
let dia = stringSeparada[0]
let mes = stringSeparada[1]


if (dia > 31){
    console.log(`Data invalida`)
    process.exit()
}
else if (dia <= 0){
    console.log(`Data invalida`)
    process.exit()
}
else if (mes <= 0){
    console.log(`Data invalida`)
    process.exit()
}
else if (mes > 12){
    console.log(`Data invalida`)
    process.exit()
}


function Substituidor(){
if (mes == '01'){
    return 'Janeiro'
}
else if (mes == '02'){
    return 'Fevereiro'
}
if (mes == '03'){
    return 'Março'
}
if (mes == '04'){
    return 'Abril'
}
if (mes == '05'){
    return 'Maio'
}
if (mes == '06'){
    return 'Junho'
}
if (mes == '07'){
    return 'Julho'
}
if (mes == '08'){
    return 'Agosto'
}
if (mes == '09'){
    return 'Setembro'
}
if (mes == '10'){
    return 'Outubro'
}
if (mes == '11'){
    return 'Novembro'
}
if (mes == '12'){
    return 'Dezembro'
}
}

console.log(`${stringSeparada[0]} de ${Substituidor()} de ${stringSeparada[2]}`)
