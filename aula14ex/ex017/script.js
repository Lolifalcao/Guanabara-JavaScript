function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ' '                              // para limpar a área entre uma tabuada e outra
        while (c <= 10) {
            let item = document.createElement('option')  // criar elementos dentro do select
            item.text = `${n} x ${c} = ${n*c}`           // a parte de dentro do option
            item.value = `tab${c}`                       // para saber o item que foi selecionado, mais utilizado em outras linguagens
            tab.appendChild(item)                        // adiciona um elemento filho fazendo aparecer a tabuada dentro do seletor
            c++
        }
     }
    
}