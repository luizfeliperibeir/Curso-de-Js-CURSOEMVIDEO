var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas`)
if (hora<12)
{
    console.log('bom dia')
}
else if(hora<=18)
{
    console.log('boa tarde')
}
else if (hora>24)
{
    console.log('tá de sacanagem')
}
else 
{
    console.log('Boa noite')
}
