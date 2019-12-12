
/*
Exercício 4
Escreva um programa que leia dois números e apresente um menu de opções como o mostrado abaixo:

Escolha a opção: A- Soma de 2 números. B- Diferença entre 2 números (maior pelo menor). bC- Produto entre 2 números. D- Divisão entre 2 números (o denominador não pode ser zero).

Leia a opção do usuário e execute a operação com os dois números lidos anteriormente. Caso a opção digitada seja inválida, apresente a mensagem de “Opção inválida” para o usuário. Lembre-se de usar funções para organizar seu programa.
*/
//FEITO
function soma(a, b) {
    let res = a + b;
    console.log("A soma é" + res);
  }
  
  function diferenca(a, b) {
    let dif = Math.abs(a - b);
    console.log("A diferença é" + dif);
  }
  
  function produto(a, b) {
    let prod = a * b;
    console.log("O produto é" + prod);
  }
  
  function divisao(a, b) {
    let div;
    if (b === 0) {
      console.log("O denominador não pode ser zero.");
    }
    else {
      div = a / b;
      console.log("A divisão é" + div);
    }
  }
  
  let valor1 = parseInt(window.prompt('Digite o 1o valor:'));
  let valor2 = parseInt(window.prompt('Digite o 2o valor:'));
  
  console.log("Escolha a opção:\nA- Soma de 2 números.\nB- Diferença entre 2 números (maior pelo menor).\nC- Produto entre 2 números.\nD- Divisão entre 2 números (o denominador não pode ser zero).");
  let opcao = prompt();
  switch (opcao.toUpperCase()) {
    case "A": soma(valor1, valor2); break;
    case "B": diferenca(valor1, valor2); break;
    case "C": produto(valor1, valor2); break;
    case "D": divisao(valor1, valor2); break;
    default: console.log("Opção inválida."); break;
  }