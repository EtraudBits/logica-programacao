//cria referencia ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um "ouvite" para quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  //obtem o conteudo dos campos
  const nome = frm.inNome.value;
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);

  const media = (nota1 + nota2) / 2; //calcula a media dos 2 numeros

  resp1.innerText = `Médias das Notas ${media.toFixed(2)}`; //informa a media das notas
  //cria a condição
  if (media >= 7) {
    //if = se
    //se a media for a cima ou igual a 7 resp 2 aprovado
    resp2.innerText = `Parabéns ${nome}! você foi aprovado(a)`;
    resp2.style.color = "blue"; //altera a cor da fonte
  } else if (media >= 4) {
    // else if = senão se
    // se estive entre 6.9 e 4 (senão se) resp2 em recuperação
    resp2.innerText = `Atenção ${nome} você esta em Recuperação`;
    resp2.style.color = "green";
  } else {
    //else = senão
    //senão for maior ou igual a 7 resp2 reprovado
    resp2.innerText = `Ops ${nome} você foi Reprovado(a)`;
    resp2.style.color = "red"; //altera a cor da fonte
  }
  e.preventDefault(); //evita o envio do form
});
