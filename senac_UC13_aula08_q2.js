function definirDiaDaSemana(dia) {
    if (dia === 1) {
        return "Domingo";
    } else if (dia === 2) {
        return "Segunda-feira";
    } else if (dia === 3) {
        return "Terça-feira";
    } else if (dia === 4) {
        return "Quarta-feira";
    } else if (dia === 5) {
        return "Quinta-feira";
    } else if (dia === 6) {
        return "Sexta-feira";
    } else if (dia === 7) {
        return "Sábado";
    } else {
        return "Número inválido";
    }
}

// Chamando a função com os valores 3, 7 e 8
console.log(definirDiaDaSemana(3));  // Resultado esperado: "Terça-feira"
console.log(definirDiaDaSemana(7));  // Resultado esperado: "Sábado"
console.log(definirDiaDaSemana(8));  // Resultado esperado: "Número inválido"