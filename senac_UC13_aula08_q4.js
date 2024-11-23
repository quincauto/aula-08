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

// Testando a função com os valores fornecidos
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  // false