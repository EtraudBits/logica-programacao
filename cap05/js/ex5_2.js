//obtem dados do form e dos elemento da resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um ouvite quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value); //obtem numero informado
  let resposta = `Entre ${numero} e 1: `; //string para montar a respsta
  for (let i = numero; i > 1; i--) {
    //cria um for decrescente
    resposta = resposta + i + ", "; //resposta acumula numeros (e virgula)
  }
  resposta = resposta + "1.";
  resp.innerText = resposta; //exibe a resposta
});
