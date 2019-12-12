/*
Exercício 3
Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.
*/

// FEITO

let vetor = new Array();
//leitura dos valores
for (let j = 0; j < 10; j++) {
  console.log("Digite a " + j + "Posição do vetor:");
  vetor[j] = Number(prompt());
}
//ordenção
for (let i = 0; i < vetor.length; i++) {
  for (let k = i; k > 0 && vetor[k] < vetor[k - 1]; k--) {
    let aux = vetor[k - 1];
    vetor[k - 1] = vetor[k];
    vetor[k] = aux;
  }
}
// exibe o resultado
console.log("O vetor ordenado é" + vetor);
