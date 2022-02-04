let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)      vai mostrar a sequência dentro do parênteses
/*
console.log(valores[0])     vai mostrar cada elemento um embaixo do outro sem parênteses
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

console.log(`${valores}`)  // mostra os elementos lado a lado sem colchetes

for(let pos=0; pos < valores.length; pos++) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)  // mostra cada elemento um embaixo do outro
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)  // Outra estruta de 'for' simplificada para vetores e objetos
}