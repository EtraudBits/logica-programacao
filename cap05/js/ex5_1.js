//obtem campos do form e elementos da resp
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

//cria um ouvite para quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o envio do form
  const numero = Number(frm.inNumero.value); //obtém o numero informado
  let resposta = ""; //variavel do tipo string, para concatenar a resposta
  // cria um laço de repetição (i comça em 1 e é incrementado até 10)
  for (let i = 1; i <= 10; i++) {
    //resposta = resposta + numero + " x " + i + " = " (numero * i) + "\n"
    resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`; //a variavel resposta vai acumulando os novos conteudos
  }
  //o conteúdo da tag pre é alteradao para exibir a tabuada do número
  resp.innerText = resposta;
});
