//obtem os valores do form e os elemento da resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria ovinte quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o form ser enviado

  //obtem dados do numero
  const numero = Number(frm.inNumero.value);

  let numDivisores = 0; //declara e inicializa contador
  /*
  //EMBORA FUNCIONE, O DESEMPENHO É RUIM, ABAIXO UM METODO MAIS OTIMIZADO.
  for (let i = 1; i <= numero; i++) {
    //percorre todos os possiveis divisores de numero
    if (numero % i == 0) {
      //verifica se i (1, 2, 3...) é divisor do numero
      numDivisores++; //se é incrementa contador
    }
  }
  if (numDivisores == 2) {
    //se possui apenas 2 divisores, é primo
    resp.innerText = `${numero} é Primo`;
  } else {
    resp.innerText = `${numero} não é Primo`;
  } */

  //METODO MAIS OTIMIZADO
  let temDivisor = 0; //declara e inicializa a variável tipo flag

  for (let i = 2; i <= numero / 2; i++) {
    //percorre os possiveis divisores de numero
    if (numero % i == 0) {
      //se tem um divisor
      temDivisor = 1; //muda o flag
      break; //sai da repetição
    }
  }
  if (numero > 1 && !temDivisor) {
    //se numero > 1 e não possui divisor
    resp.innerText = `${numero} É Primo.`; //exibe as respostas
  } else {
    resp.innerText = `${numero} Não é Primo.`;
  }
});
