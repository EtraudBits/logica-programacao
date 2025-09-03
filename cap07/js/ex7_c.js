//obtém os elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um ouvite para quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  //e é o evento
  e.preventDefault(); // impede a pagina de recarregar
  //obtém os valores dos campos
  const dataInfracaoStr = frm.inDataInfracao.value; // obtém o valor do campo dataInfracao (em string)
  const valorMulta = Number(frm.inMulta.value); // obtém o valor do campo inMulta e converte para número
  const desconto = (valorMulta * 20) / 100; // calcula o desconto
  const totalComDesconto = valorMulta - desconto; // calcula o total com desconto

  const hoje = new Date(); // cria uma data atual
  const ms = 86400000; // 1 dia em milisegundos
  const dataInfracao = new Date(dataInfracaoStr); // converte a string para data
  // calcula a data limite para o pgamneto com desconto (90 dias depois)
  const diaLimite = new Date(dataInfracao); // converte a string para data
  diaLimite.setDate(diaLimite.getDate() + 90); // adiciona 90 dias
  const diasRest = Math.ceil((diaLimite - hoje) / ms); // calcula os dias restantes

  //exibe a resposta
  resp.innerText = `- Falta: ${diasRest} dias.\n- Data Limite para pagamento com Desconto: ${diaLimite.toLocaleDateString(
    "pt-BR"
  )}.\n- Valor com Desconto R$: ${totalComDesconto.toFixed(2)}.`;
});
