//cria referencia ao form e elementos onde será exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria o ouvite quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado
  const numero = Number(frm.inNumero.value);
  const raizQuadrada = Math.sqrt(numero);
  /*
  para veririficar se o numero é inteiro pode usa-se tambem os operadores % e ==. 
  Exemplo: 
 if(raizQuadrada % == 0) //informa que se o resultado de raizQuadrada a sobra (%) for igual (==) a 0, a raiz quadrada é exata.
    resp.innerText = `A raiz Quadrada de ${numero} é: ${raizQuadrada}`;
  } else {
    resp.innerText = `Não raiz Quadrada Extata para ${numero}`;
*/
  if (Number.isInteger(raizQuadrada)) {
    //metodo isInteger verifica se o numero é Inteiro
    resp.innerText = `A raiz Quadrada de ${numero} é: ${raizQuadrada}`;
  } else {
    resp.innerText = `Não raiz Quadrada Extata para ${numero}`;
  }
});
