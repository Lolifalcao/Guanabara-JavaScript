function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10) {
                // criança
                img.setAttribute('src', 'fotohomemcrianca.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'fotohomemjovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'fotohomemadulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'fotohomemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                // criança
                img.setAttribute('src', 'fotomulhercrianca.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'fotomulherjovem.png')
            } else if (idade < 50) {
                // adulta
                img.setAttribute('src', 'fotomulheradulta.png')
            } else {
                // idosa
                img.setAttribute('src', 'fotomulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}