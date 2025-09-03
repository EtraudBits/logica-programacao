//função que calcula o desconto
//recebe o valor da vacina e a taxa de desconto (ex.: 0.1 para 10%)
const calcularDesconto = (valor, taxa) => valor * taxa;

//obtém os elementos
const frm = document.querySelector("form");
const rbSim = document.querySelector("#rbSimConvenio");
const rbNao = document.querySelector("#rbNaoConvenio");
const selSim = document.querySelector("#inSim");
const selNao = document.querySelector("#inNao");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

//função que mostra ou oculta o select de convenio
rbSim.addEventListener("click", () => {
  selSim.className = "exibe";
  selNao.className = "oculta";
});
rbNao.addEventListener("click", () => {
  selNao.className = "exibe";
  selSim.className = "oculta";
});

//função principal, quando o submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que form seja enviado
  //obtém o valor digitado no campo
  const valor = Number(frm.inValor.value);

  //taxa de desconto
  let taxa;

  //verifica se possui convenio ou não
  if (rbNao.checked) {
    taxa = 0.1; // 10% de desconto sem convenio
  } else {
    if (selSim.value === "amigoDosAnimais") {
      taxa = 0.2; //20% para o convenio Amigo dos Animais
    } else if (selSim.value === "saudeAnimal") {
      taxa = 0.5; //50% para convenio Saude Animal
    }
  }
  const desconto = calcularDesconto(valor, taxa);
  const valorFinal = valor - desconto;

  //exibe o resultado (resp1 e resp2)
  resp1.innerText = `Desconto R$ ${desconto.toFixed(2)}`;
  resp2.innerText = `A pagar R$ ${valorFinal.toFixed(2)}`;
});
