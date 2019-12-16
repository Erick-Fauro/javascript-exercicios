
/*
Exercício 11
Crie um game de jo-ken-po. A cada rodada, o jogador vê o menu:

Escolha sua jogada: 1 - Papel 2 - Pedra 3 - Tesoura

O jogo lê a opção do jogador e verifica se é válida. Se for inválida, o jogador perde a rodada e o jogo acaba. Se for válida, o computador escolhe uma resposta aleatória, que é mostrada ao jogador. Se o jogador ganhar, ele pode jogar mais uma rodada e sua pontuação aumenta. O jogo acaba quando o jogador perde uma rodada. A pontuação total é mostrada no fim do jogo.
*/
//feito
function inicia(){
    let opcao = parseInt(window.prompt("Qual é a opção 1 - Papel 2 - Pedra 3 - Tesoura"));
    let resposta = Math.floor((Math.random() * 3) + 1);
    let opcaoe = "";
    let verificador = true;
  
    if (resposta == 1){
      opcaoe += "A resposta é papel";
    }
    else if (resposta == 2){
      opcaoe += "A respostas é pedra";
    }
    else if (resposta == 3){
      opcaoe += "A resposta é tesoura";
    }
    if (opcao === resposta){
      alert("A resposta é invalida"+opcaoe+".");
    }else if (opcao==1 && resposta == 2){
      alert("A resposta é valida" +opcaoe+".");
      inicia();
    }else if (opcao==2 && resposta==1){
      alert("A resposta é invalida" +opcaoe+".");
    }else if (opcao==3  && resposta==1){
      alert("A resposta é valida" +opcaoe+".");
      inicia();
    }else if (opcao==3 && resposta==2){
      alert("A resposta é invalida"+opcaoe+".");
    }else if(opcao==2 && resposta==3){
      alert("A resposta é valida"+opcaoe+".");
      inicia()
    }else if(opcao==1 && resposta==3){
      alert("A resposta é invalida"+opcaoe+".");
    }
  }
  inicia();