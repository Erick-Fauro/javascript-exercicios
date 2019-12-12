
/*
Exercício 6
Faça um programa que peça ao usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.
*/
//FEITO
var tempF, tempC;
tempF = Number(prompt());
tempC = (tempF - 32) * 5 / 9;
console.log("A temperatura em Celsius é" + tempC);