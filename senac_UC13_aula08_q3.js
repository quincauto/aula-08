function parOuImpar(numero) {
    return (numero % 2 === 0) ? "Par" : "Ímpar";
}

// Chamando a função com os valores 10, 15 e 22
console.log(parOuImpar(10));  // Resultado esperado: "Par"
console.log(parOuImpar(15));  // Resultado esperado: "Ímpar"
console.log(parOuImpar(22));  // Resultado esperado: "Par"