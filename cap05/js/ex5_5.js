//obtem os valores de form e elementos das respostas
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = ""; //string com a resposta a ser exibida
let numContas = 0; // inicializa contador...
let valTotal = 0; //e acumulador (variaveis globais)

//cria um ouvite para quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja eviado

  //obtem dados da conta
  const descricao = frm.inDescricao.value;
  const valor = Number(frm.inValor.value);

  numContas++; //adiciona valores ao contador e ecumulador
  valTotal += valor; //ou valorTotal = valTotal + valor
  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
  resp1.innerText = `${resposta}........................`;
  resp2.innerText = `${numContas} conta(s) - Total R$: ${valTotal.toFixed(2)}`;

  //limpa campos do form
  frm.inDescricao.value = "";
  frm.inValor.value = "";
  frm.inDescricao.focus(); //posiciona no campo inDescricao do form
});
