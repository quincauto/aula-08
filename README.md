# Documentação da aula 08


##  **Questão 1**
```javascript

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

// Exemplos de chamada da função
console.log(verificarIdade(15));  // Resultado: "Menor de idade"
console.log(verificarIdade(18));  // Resultado: "Maior de idade"
console.log(verificarIdade(21));  // Resultado: "Maior de idade"
```
## **Questão 2**
javascript

/**
 * Retorna o nome do dia da semana com base em um número.
 * 
 * @param {number} dia - Número representando o dia da semana (1 a 7).
 * @returns {string} O nome do dia correspondente ou "Número inválido" se o valor não for entre 1 e 7.
 */
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

// Exemplos de chamada da função
console.log(definirDiaDaSemana(3));  // Resultado: "Terça-feira"
console.log(definirDiaDaSemana(7));  // Resultado: "Sábado"
console.log(definirDiaDaSemana(8));  // Resultado: "Número inválido"

##**Questão 3**
javascript
Copiar código
/**
 * Verifica se um número é par ou ímpar.
 * 
 * @param {number} numero - O número a ser verificado.
 * @returns {string} Retorna "Par" se o número for par, "Ímpar" se for ímpar.
 */
function parOuImpar(numero) {
    return (numero % 2 === 0) ? "Par" : "Ímpar";
}

// Exemplos de chamada da função
console.log(parOuImpar(10));  // Resultado: "Par"
console.log(parOuImpar(15));  // Resultado: "Ímpar"
console.log(parOuImpar(22));  // Resultado: "Par"
```
## **Questão 4**
```javascript
Copiar código
/**
 * Verifica se um usuário pode acessar o sistema com base nas suas propriedades.
 * 
 * @param {Object} usuario - O objeto que contém as propriedades do usuário.
 * @param {number} usuario.idade - A idade do usuário.
 * @param {boolean} usuario.isAdmin - Indica se o usuário é administrador.
 * @param {boolean} usuario.isBlocked - Indica se a conta do usuário está bloqueada.
 * @returns {boolean} Retorna true se o usuário pode acessar o sistema, caso contrário, retorna false.
 */
function podeAcessar(usuario) {
    // Verifica se o usuário tem mais de 18 anos ou é administrador,
    // e também verifica se a conta não está bloqueada.
    return (usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked;
}

// Exemplos de chamada da função
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // Resultado: true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  // Resultado: false

## **Questão 5**
```javascript
Copiar código
/**
 * Calcula o preço com desconto de um produto.
 * 
 * @param {number} precoOriginal - Preço original do produto.
 * @param {number} desconto - Porcentagem de desconto a ser aplicada.
 * @returns {number} O preço final do produto após o desconto.
 */
const calcularDesconto = (precoOriginal, desconto) => 
    precoOriginal - (precoOriginal * (desconto / 100));

// Exemplos de chamada da função
console.log(calcularDesconto(100, 10));  // Resultado: 90
console.log(calcularDesconto(250, 20));  // Resultado: 200