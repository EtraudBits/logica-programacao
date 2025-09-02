//cria referência ao form e ao elmento h3 (onde será exibida a resposta)
const frm = document.querySelector("form"); //objeto "document" e metodo "querySelector"
const resp = document.querySelector("h3");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado (metodo "addEventListener")
frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; //obtém o nome digitado no form (propriedade "value" é utilizado para obter o conteudo digitado no campo de formulario)
  resp.innerText = `Olá ${nome}`; //exibe a resposta do programa (propriedade "innerText", altera um atributo do documento, faz a resposta ser exibida na página)
  e.preventDefault(); //evita envio do form (metodo "preventDefault" evita a atulização da pagina e que os dados se percam)
});
