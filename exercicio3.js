/* Exercício 2
   Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.
*/
valor = parseInt(window.prompt('Digite o valor da tabuada para ser impressa'));
for (count = 1; count <= 10; count++) {
  document.write(valor + " X " + count + " = " + (count * valor) + "<br>");
}