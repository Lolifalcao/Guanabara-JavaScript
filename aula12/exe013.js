var agora = new Date()
var diaSem = agora.getDay()
/*
dom = 0 -> para o JS os dias da semana são números
seg = 1
ter = 2
qua = 3
qui = 4
sex = 5
sab = 6
*/
console.log(diaSem)

switch(diaSem) { // se fosse usar o 'if' iria escrever muito mais
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
}