var num = [5, 8, 2, 9, 3]

//Se eu realizar a seguinte aplicação: num[3] = 6  no caso o terçeiro elemento do array cebera o valor 6

//Se eu adicionar o .push na frente da variavel eu irei gerar um comando para que o JavaScript crie um elemento para min no final da sequencia de indices com o valor atribuido dentro do paresentese. Exemplo: num.push(7) -> Neste caso o JavaScript irá criar mais um indice ao final da sequencia e irá atribuir o valor "7" ao mesmo.

//Eu utilizar o método .sort, eu faço com que o JavaScript organize toda a sequencia dos elementos do meu array na ordem crescente. Exemplo num.sort() -> ele irá exigir [ 2, 3, 5, 8, 9, 1 ]

//Posso utilizar também o atributo .length para que ele me mostre quantos elemetnso eu possuo em um Array.

//Se eu quiser encontrar um valor especifico em um array, eu devo utilizar o comando .indexOf(). Exemplo: num.indexOf(7). No caso ele irá pesquisar dentro dos indices/chaves, quais deste possui o valor 7. Obs: Caso ele não encontre este valor, ele irá retornar o valor -1.

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos  = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos} \n`)
}

//Para visualizar a sequencia de vetores:
for (var pos = 0;pos<num.length;pos++) {
    console.log(num[pos])
}
