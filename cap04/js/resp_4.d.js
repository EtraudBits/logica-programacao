//criar ref. do form e dos elementos da respostas
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

//criar o ouvinte quando o botal submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que a pagina atualize quando o botao for clicado

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    resp1.innerText = "Não pode ser um triângulo";
    resp2.innerText = "";
    return;
  }
  if (ladoA === ladoB && ladoB === ladoC) {
    resp1.innerText = "Lados podem formar um Triângulo";
    resp2.innerText = "Tipo: Equilátero";
  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    resp1.innerText = "Lados podem formar um Triângulo";
    resp2.innerText = "Tipo: Isósceles";
  } else {
    resp1.innerText = "Lados podem formar um Triângulo";
    resp2.innerText = "Tipo: Escaleno";
  }
});
