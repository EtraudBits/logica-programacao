//cria referencia ao form e elementos onde será exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// limpa o conteudo do elemento h3 que existe a resposta
frm.addEventListener("reset", () => {
  resp.innerText = "";
});
//cria um "ouvite" quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o form ser enviado
  const nome = frm.inNome.value; // ler os campos
  const masculino = frm.inMasculino.checked; //checked verifica a seleção
  const altura = Number(frm.inAltura.value);

  /*let peso; //delcara a variavel peso (usa-se let na variavel que sofrerá alteração, por isso que não usaremos const)
  if (masculino) {
    peso = 22 * Math.pow(altura, 2); // math.pow eleva ao quadro -> altura²
  } else {
    peso = 21 * Math.pow(altura, 2);
  }*/

  //existe a forma abreviada, chamada de Operador tenario. ("?"" = verdadeiro e ":"" = caso contrario)
  const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);
  resp.innerText = `${nome}: seu peso ideal é: ${peso.toFixed(3)} kg`; //apresenta a resposta (altera o conteúdo do elemento h3 da página)
});
