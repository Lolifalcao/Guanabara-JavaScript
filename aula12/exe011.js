/* var idade = 16
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18) {     -> pode retirar 'idade>=16 &&' pq se a 1º cond, menor 16, é falsa então só pode ser maior que 16. 
        console.log('Voto opcional')
    }
} */

/*var idade = 20
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {          -> pode usar else if para economizar um bloco
    console.log('Voto opcional')
} else if (idade >= 18) {         -> se a idade não é menor do que 18 então é obvio que é igual ou maior. Pode tirar o "if"
    console.log('Voto obrigatório')
}*/

var idade = 65
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {  // maior de 16 menor que 18 ou maior que 65 é opcional
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

/* O código sem abreviações:
var idade = 66
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18 || idade >65) { 
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
}*/