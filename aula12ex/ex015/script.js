function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebe2.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'adolescentec.jpg')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'homemjovemadulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'homemcoroa.jpg')
            }
       } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'criançamulher.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemadulta.jpg')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'adulta2.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    } 

    
}