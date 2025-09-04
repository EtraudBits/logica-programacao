//captura os elementos da pagina (fom; pre; outCavalo)
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

//gera um array com os nomes dos cavalos participantes do páreo
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

//vetor que irá armazenar um objeto aposta (com nº e valor da aposta)
const apostas = [];

//cria um ouvite para o botão submit quando clicado

frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado

  //chama os dados preenchido
  const cavalo = frm.inCavalo.value;
  const valor = Number(frm.inValor.value);

  //adiciona ao vetor de objetos (atributos cavalo e valor)
  apostas.push({ cavalo, valor });
  //variavel para exibir a lista das apostas realizadas
  let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;

  //percore o vator e concatena em lista as apostas realizadas
  for (aposta of apostas) {
    lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
    lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;
  }

  //exibe a resposta (lista das apostas)
  respLista.innerText = lista;

  frm.reset();
  frm.inCavalo.focus(); //posiciona o cursor em inCavalo
});

//função obterCavalo (VERIFICAR SE EXISTE ESSA FUNÇÃO AQUI MESMO)
/*const obterCavalo = (num) => {
  const posicao = num - 1; //posição no vetor (subtrai 1, pois inicia em 0)
  return CAVALOS[posicao]; //nome do cavalo (da const CAVALOS)
};*/

//evento blur no elemento frm.inCavalo - ocorre quando o campo perde o foco
frm.inCavalo.addEventListener("blur", () => {
  //se não preencheu o cmapo, limpa respCavalo e retorna
  //(não exibe mensagem de alerta, pois pode sair por um clique em Ganhador)
  if (frm.inCavalo.value == "") {
    respCavalo.innerText = "";
    return;
  }
  const numCavalo = Number(frm.inCavalo.value); //nº do cavalo convertido em number

  if (!validarCavalo(numCavalo)) {
    alert("Nº do cavalo inválido");
    frm.inCavalo.focus();
    return;
  }
  //atribui retorno das funções à variáveis
  const nome = obterCavalo(numCavalo);
  const contaNum = contarApostas(numCavalo);
  const total = totalizarApostas(numCavalo);

  //exibe nome, nº de apostas e total apostado no cavalo
  respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(
    2
  )})`;
});

//função obterCavalo (recebe o parametro numero do cavalo)
const obterCavalo = (num) => {
  const posicao = num - 1; //posição do vetor (subtrai 1, pois inica em 0)
  return CAVALOS[posicao]; //nome do cavalo (da const CAVALO)
};

//funçao validarCavalo
const validarCavalo = (num) => {
  //retorna o valor resultante da condição (true e false)
  return num >= 1 && num <= CAVALOS.length;
};

const contarApostas = (num) => {
  let contador = 0;
  //percorre o vetor apostas
  for (const aposta of apostas) {
    //verifica se a aposta é no cavalo passado como parâmetro
    if (aposta.cavalo == num) {
      contador++; //conta +1 quando a aposta for no cavalo do parâmetro
    }
  }
  return contador; //retorna o nº de apostas no cavalo numCavalo
};
const totalizarApostas = (num) => {
  let total = 0;
  for (const aposta of apostas) {
    if (aposta.cavalo == num) {
      total += aposta.valor; //soma o valor das apostas
    }
  }
  return total; //retorna a soma dos valores apostados em nuCavalo
};

//quando o campo recebe o foco, limpa o conteúdo e dados do cavalo
frm.inCavalo.addEventListener("focus", () => {
  frm.inCavalo.value = "";
  respCavalo.innerText = "";
});

//associa o botão Resumo
frm.btResumo.addEventListener("click", () => {
  //vetor com valores zerados paa cada cavalo
  const somaApostas = [0, 0, 0, 0, 0, 0];

  //percorre apostas e acumula na posição do cavalo apostado (-1, pois inica em 0)
  for (const aposta of apostas) {
    somaApostas[aposta.cavalo - 1] += aposta.valor;
  }
  //exibe o resultado
  let resposta = `Nº Cavalo................R$ apostado\n${"-".repeat(35)}\n`;
  CAVALOS.forEach((cavalo, i) => {
    resposta += ` ${i + 1} ${cavalo.padEnd(20)}`;
    resposta += ` ${somaApostas[i].toFixed(2).padStart(11)}\n`;
  });
  respLista.innerText = resposta;
});

//associa o botão Ganhador

frm.btGanhador.addEventListener("click", () => {
  const ganhador = Number(prompt("Nº Cavalo Ganhador: "));

  //para validar o preenchimento do prompt anterior
  if (isNaN(ganhador) || !validarCavalo(ganhador)) {
    alert("Cavalo Inválido");
    return;
  }
  //uso do metodo reduce para somar o valor das apostas
  const total = apostas.reduce(
    (acumulador, aposta) => acumulador + aposta.valor,
    0
  );

  //concatena em resumo o resultado a ser exibido na página
  let resumo = `Resultado Final do Páreo\n${"-".repeat(30)}\n`;

  resumo += `Nº Total de Apostas: ${apostas.length}\n`;
  resumo += `Total Geral R$: ${total.toFixed(2)}\n\n`;
  resumo += `Ganhador Nº ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
  resumo += `Nº de Apostas: ${contarApostas(ganhador)}\n`;
  resumo += `Total Apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`;

  respLista.innerText = resumo; //exibe o resultado

  frm.btApostar.disabled = true; // desabilita os botões apostar e ganhador
  frm.btGanhador.disabled = true;
  frm.btNovo.focus(); //joga o foco no botão "Novo Páreo"
});

//recarrega a página (ara funções com apenas 1 linha, não é necessário {})
frm.btNovo.addEventListener("click", () => window.location.reload());
