var agora = new Date() // para pegar as informações do sistema
var hora = agora.getHours() // pegar a hora atual
//var hora = 21 -> se não for usar a hora do sistema e quiser apensa dizer o número pra testar
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}