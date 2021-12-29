var c = 1
while (c <= 6) {
    console.log('Tudo bem?')
    c++ // c = c + 1
}
// enquanto c for menor ou igual a 6 vai escrever a string.
// a cada volta vai aumentando 1 e vai voltando até o c ser maior que 6

// Utilizando o Do, onde primeiro vai ser executado o bloco e depois testado:
var c = 1
 do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)

/* Tem a mesma funcionalidade de escrever 6 vezes a mesma coisa:
console.log('tudo bem?')
console.log('tudo bem?')
console.log('tudo bem?')
console.log('tudo bem?')
console.log('tudo bem?')
console.log('tudo bem?')
*/