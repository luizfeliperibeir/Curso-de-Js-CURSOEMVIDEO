let num = [5,6,4,3,1]
num[5]=6
num.push(7)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`Ò vetor tem ${num.length} posições`)
/*for(var pos=0;pos<num.length; pos++)
{
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
for(let pos in num)
{
    console.log(num[pos])
}