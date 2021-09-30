var numSecret = parseInt(Math.random()*11);
var numTentativas = 3;

function Chutar() {
  var elemtResult = document.getElementById("resultado");
  var tentativas = document.getElementById("tentativas");
  var chute = parseInt(document.getElementById("valor").value);
    
   if (numTentativas > 0) {
    if (chute == numSecret) {
      elemtResult.innerHTML = "Você acertou o número secreto";
      numTentativas === 0;
      tentativas.innerHTML = "Recarregue a página para jogar novamente."
    } else if (chute > 10 || chute < 0) {
      elemtResult.innerHTML = "Digite um número entre 0 e 10.";
    } else {
        numTentativas--;
        tentativas.innerHTML = "Você tem " + numTentativas + " tentativa(s) restante.";
      if (numSecret < chute) {
        elemtResult.innerHTML = "OO número secreto é menor do que o número digitado.";
      } else if (numSecret > chute) {
        elemtResult.innerHTML = "O número secreto é maior do que  o número digitado..";
      }
    }
  } if (numTentativas === 0) {
    elemtResult.innerHTML = "Você errou. O numero secreto era " + numSecret;
    tentativas.innerHTML = "Sua tentativas acabaram. Recarregue a página para tentar novamente."
  }
}