/*
Exercício 5
Uma eleição possui 2 candidatos a prefeito: o candidato José, do Partido da Felicidade e o candidato João, do Partido da Esperança. Os eleitores votam nos candidatos pelo número do partido. Para votar no candidato José do Partido da Felicidade, precisam digitar o número 1. Para votar no candidato João, do Partido da Esperança, precisam digitar o número 2.

Faça um programa que simule uma urna eletrônica. Para cada eleitor, deve ser lido o número do seu título e em seguida o eleitor poderá digitar o seu voto. A eleição é encerrada quando um valor negativo (menor do que 0) para o título do eleitor é digitado. Informe quantos votos cada candidato teve e qual deles ganhou a eleição.
*/

var titulo, totalJose, totalJoao;
totalJose = 0;
totalJose = 0;
do {
  console.log("Digite o seu titulo de eleitor:");
  titulo = Number(prompt());
  if (titulo >= 0) {
    console.log("Candidatos:\n1 - José, Partido da Felicidade.n\2 - João, Partido da Esperança.");
    var voto = Number(prompt());
    switch (voto) {
      case 1: totalJose++; break;
      case 2: totalJoao++; break;
      default: console.log("Voto nulo.");
    }
    console.log("Parabéns, cidadão!");
  }
} while (titulo >= 0);
// exibir totais
console.log("Resultado:\nJosé teve" + totalJose + "votos.\nJoão teve" + totalJoao + "votos.");
if (totalJose > totalJoao) {
  console.log("José foi eleito.");
}
else if (totalJoao == totalJose) {
  console.log("A eleição empatou, tirem no dado.");
}
else {
  console.log("João foi eleito.");
}
