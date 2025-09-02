//cria ref. ao form e aos elementos da resposta
const frm = document.querySelector("form");
const resptempo = document.querySelector("#outTempo"); //variavel tem que ser diferente da let embaixo
const resptroco = document.querySelector("#outTroco");

//cria ouvite para quando do botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o emvio do form

  const valor = Number(frm.inValor.value);

  let tempo = 0; //inicializa a variavel do tempo
  let troco = 0; //inicializa a variavel de troco

  //varifica se o valor é menor que R$ 1.00 (não permite nenhum tempo)
  if (valor < 1.0) {
    resptempo.innerText = "Valor Insuficiente."; //exibi a msg de erro
    resptroco.innerText = ""; //limpa o campo de troco
    return; //interrompe a função aqui
  }
  //verifica qual é o tempo de mermanencia conforme o valor
  if (valor >= 3.0) {
    tempo = 120;
    troco = valor - 3.0;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1.0;
  }
  // exibe as respostas na tela
  resptempo.innerText = `Tempo: ${tempo} min`;
  resptroco.innerText = troco > 0 ? `Troco R$: ${troco.toFixed(2)}` : ""; // operadores tenarios (? = verdade e : = falso) se troco for maio que zero, exibir o valor do troco, caso contrario vazio
});
