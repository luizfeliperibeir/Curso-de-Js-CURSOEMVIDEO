function contar()
{
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')

    if(ini.nodeValue.length == 0 || fim.nodeValue.length == 0 || pas.nodeValue.length == 0){
        alert('[ERRO] Faltam dados!')
    } else {alert('tudo ok!')}
}

