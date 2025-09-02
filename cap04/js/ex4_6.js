//cria referencia ao form e elementos onde será exibida a resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1"); //o simbolo "#" significar que esta sendo selecionado um elemento pelo o seu id por esta sendo usado o document.querySelector. Caso fosse usado o document.getElementById, não seria necessário pois ele já entende que é uma id.
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

//cria o ouvinte quando o botao submit for clcado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o envio do form
  const saque = Number(frm.inSaque.value); //obtem o valor do saque
  if (saque % 10 != 0) {
    //se saque não é multiplo de 10 (se esto do valor do saque não for 0, não é multiplo de 10)
    alert("valor inválido para notas disponíveis (R$ 10, 50 e 100)");
    frm.inSaque.focus(); //focus coloca o curso de volta no campo de saque
    return;
  }
  //limpa as respstas ANTAS de calcular
  resp1.innerText = "";
  resp2.innerText = "";
  resp3.innerText = "";

  const notasCem = Math.floor(saque / 100); // calcula notas de 100 (arrendonda para baixo)
  let resto = saque % 100; //quanto sobra para pagar
  const notasCiquenta = Math.floor(resto / 50); //calcula notas de 50 (arrendonda para baixo) usando o resto de notas que sobrou de 100
  resto = resto % 50; //quanto sobra para pagar
  const notasDez = Math.floor(resto / 10); // calcula notas de 10 (arrendondando para baixo) do resto que sobrou das notas de 50
  if (notasCem > 0) {
    //exibe as notas se houver
    resp1.innerText = `Notas de R$ 100: ${notasCem}`;
  }
  if (notasCiquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCiquenta}`;
  }
  if (notasDez > 0) {
    resp3.innerText = `Notas de R$ 10: ${notasDez}`;
  }
});
