function contar() {        //criar a função para quando clicar no botão contar ele executar a conta
    let ini = document.getElementById('txti')    //colocar os controles com uma variável para cada passo
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')     //para mudar a id res que estava como "Preparando para contagem..."

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO faltam dados')
        res.innerHTML = 'Impossível contar!' // para apresentar essa mensagem caso falte informação. (pode restirar o alert de erro e deixar só esse também)
    } else {
        res.innerHTML = 'Contando: '   // se todos os dados forem preenchidos corretamente nas caixinhas ele mostra "contando: " embaixo do botão
        let i = Number(ini.value)      // para converter o valor que foi lançado na caixinha em valor de número
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerar passo 1')   // para o caso de passo ser 0 ou negativo vai ser considerado 1
            p = 1
        }
        if (i < f) {                // para contagem crescente, onde o valor inicial é menor que o do final
            for(let c = i; c <= f; c += p) {   //o contador começa no início 'i', enquanto o contador for menor ou igual ao fim 'f' ele receberá ele mesmo mais o passo 'p'
                res.innerHTML += `${c} \u{1F449}` // colocar esse código para aparecer emoji do unicode emoji list
            }
        } else {                   // para contagem decrescente, quando o valor inicial for maior que o final
            for(let c = i; c >= f; c -= p) {    // enquanto c for maior ou igual a f o contador vai perder o valor do passo
                res.innerHTML += `${c} \u{1F449}`   
            }
        }
        res.innerHTML += `\u{1F3C1}`    // para colocar uma bandeirinha no final
    }
}