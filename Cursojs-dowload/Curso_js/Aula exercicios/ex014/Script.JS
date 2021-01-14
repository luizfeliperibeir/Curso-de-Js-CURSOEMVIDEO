function carregar ()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h ${minuto}' ` 
    if (hora>=0 && hora<12){
        img.src = 'fotomanha.jpeg'
        document.body.style.background= '#e2cd9f'
    }
    else if (hora>=12 && hora<18){
        img.src = 'fototarde.jpeg'
        document.body.style.background= '#b9846f'
    }
    else{
        img.src = 'fotonoite.jpeg'
        document.body.style.background= '#515154'
    }
}