/*
Exercício 8
Temos um vetor de 5 posições, com o nome de 5 itens que nosso herói carrega na mochila. Quando o personagem chega numa porta, queremos detectar automaticamente se ele tem o não uma chave para deixá-lo passar. Crie uma função TemChave que percorre o vetor comparando se cada item tem o nome “chave” e retorne verdadeiro se encontrar alguma. Caso contrário, a função deve retornar falso.
*/
//FEITO
var vetor = ["pa", "pao", "copo", "chave", "mesa"];
function temChave() {
  for (var ind = 0; ind < 5; ind++) {
    if (vetor[ind] === "chave") {
      return true;
    }
  }
  return false;
}