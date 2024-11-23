/**
 * Verifica se a idade de uma pessoa é maior ou menor de idade.
 *
 * @param {number} idade - A idade da pessoa a ser verificada.
 * @returns {string} "Menor de idade" se a idade for menor que 18, 
 *                   "Maior de idade" se a idade for 18 ou mais.
 */
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}

// Chamando a função para os valores especificados e exibindo o resultado no console
console.log(verificarIdade(15));  // Resultado: Menor de idade
console.log(verificarIdade(18));  // Resultado: Maior de idade
console.log(verificarIdade(21));  // Resultado: Maior de idade