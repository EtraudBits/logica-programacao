//cria referencia ao form e elementos onde será exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria o ouvite quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o form ser enviado
  const horabrasil = Number(frm.inHorabrasil.value);
  let horafranca = horabrasil + 5; //calcula a hora na franca
  if (horafranca > 24) {
    //se passar das 24 horas na franca
    horafranca = horafranca - 24; //subtrai 24
  }

  //exibe a resposta em h3
  resp.innerText = `Hora na Franca: ${horafranca.toFixed(2)}`;
});
