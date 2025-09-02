//cria referencia ao form e aos elementos da resp.
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria ouvite quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado
  const permitida = Number(frm.inPermitida.value);
  const condutor = Number(frm.inCondutor.value);

  if (condutor <= permitida) {
    resp.innerText = "Situação: Sem Multa";
  } else if (condutor <= permitida * 1.2) {
    resp.innerText = "Situaçao: Multa Leve";
  } else {
    resp.innerText = "Situação: Multa Grave";
  }
});
