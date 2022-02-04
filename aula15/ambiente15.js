let num = [5, 8, 2, 9, 3]
num[5] = 6                            // ele cria a posição 5 que não existe e acresta o valor informado
num.push(7)                           // ele acrescenta o valor automaticamente na última posição, sem você precisar informar qual é a posição
num.sort()                            // coloca em ordem a sequência (se o push vier depois, primeiro vai colocar em ordem e depois acrescentar o valor que você informou)
console.log(`Nosso vetor é o ${num}`)

console.log(`o vetor tem ${num.length} posições`)   // para saber o comprimento do vetor, a quantidade de elementos.

console.log(`o primeiro valor do vetor é ${num[0]}`) // mostra o elemento na posição que está entre colchetes

let pos = num.indexOf(8)                            // busca valores dentro do vetor e retorna com o índice onde ele se encontra
console.log(`O valor 8 está na posição ${pos}`)     // se o valor não existir dentro do vetor retorna com a resposta -1

