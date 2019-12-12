/** 

Exercício 1
Faça um programa que leia 2 números, some - os e exiba uma mensagem com o resultado comparando se os valores são maiores, menores ou iguais a 100.
*/
//FEITO
let um = parseInt(window.prompt('Digite o primeiro valor:', 'Digite aqui!'));
let dois = parseInt(window.prompt('Digite o segundo valor:', 'Digite aqui!'));
let soma = um + dois;

if (soma > 100) {
  alert(soma = " é maior do que 100!");
}
else if (soma == 100) {
  alert(soma = " é igual a 100!");
}
else {
  alert(soma = " é menor do qeu 100!");
}