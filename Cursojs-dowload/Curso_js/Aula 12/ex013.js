var agora = new Date()
var diasem = agora.getDay()
/*
0= domingo
...
6= sabado
*/
switch(diasem){
        case 0 :
        console.log('domingo')
        break
        case 1 :
        console.log('seg')
        break
        case 2 :
        console.log('ter')
        break
        case 3 :
        console.log('quarta')
        break
        case 4 :
        console.log('quinta')
        break
        case 5 :
        console.log('sexta')
        break
        case 6 :
        console.log('sabado')
        break
}