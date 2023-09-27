// 1. Desafio: Conversor de Horáriose
function converterHorario(hora) {
    
    let [horario, periodo] = hora.split(/(AM|PM)/);
    let [horas, minutos, segundos] = horario.split(':');    

    if (periodo === "PM" && horas !== "12") {
        horas = parseInt(horas) + 12;
    } else if (periodo === "AM" && horas === "12") {
        horas = "00";
    }
    
    return `${horas}:${minutos}:${segundos}`;
}

console.log(converterHorario("06:15:25PM"));
//...

// 2. Desafio: Quantidade de Palavras
function contarPalavras(frase) {
    let contador = 1;
    
    for (let letra of frase) {
        if (letra === letra.toUpperCase()) {
            contador++;
        }
    }
    
    return contador;
}

const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
console.log(contarPalavras(frase));
//...

// 3. Desafio: Número Solitário
function encontrarNumerosSolitarios(numeros) {
    return numeros.filter(function(numero) {
        return numeros.indexOf(numero) === numeros.lastIndexOf(numero);
    });
}

const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
console.log(encontrarNumerosSolitarios(numeros));
//...

// 4. Qual é a saída do código a seguir?
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}
// Resposta -> Letra e. -> 1 1 2 1 2 3 1 2 3 4
//...

// 5. Qual é o resultado da expressão booleana abaixo?
console.log(!(true && false) || (false && true));
// Resposta -> O resultado é:  true
//...

// 6. Qual o valor da saída do código abaixo?
let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);
// Resposta -> Letra b. -> 2
//...