//cria referência aos elementos html
const frm = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDica = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

//declara variaveis globais
let palavraSorteada;
let dicaSorteada;

window.addEventListener("load", () => {
  //se não há palavras cadastradas
  if (!localStorage.getItem("jogoPalavra")) {
    alert("Cadastre palavras para o jogo"); //exibe o alerta

    //desabilita inLetra e Botões
    frm.inLetra.disabled = true;
    frm.btJogar.disabled = true;
    frm.btVerDica.disabled = true;
  }

  //obtém conteúdo do localStorage e separa em elementos de vetor
  const palavras = localStorage.getItem("jogoPalavra").split(";");
  const dicas = localStorage.getItem("jogoDica").split(";");

  const tam = palavras.length; //número de palavras cadastradas

  //gera um número entre 0 e -1 (pois arrendonda para baixo)
  const numAleatorio = Math.floor(Math.random() * tam);

  //obém palavras (em letras Maiúsculas) e dica na posição do nº aleátoria gerado
  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];
  let novaPalavra = ""; //para montar palavras exibida (com letra inicial e "_")

  //for para exibir a letra iniicial e as demais ocorrencias desta letra na palavra
  for (const letra of palavraSorteada) {
    //se igual a letra inicial, acrescenta esta letra na exibição
    if (letra == palavraSorteada.charAt(0)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else {
      novaPalavra += "_"; //senão, acrescenta "_"
    }
  }
  respPalavra.innerText = novaPalavra; //exibe a novaPalavra
});
frm.btVerDica.addEventListener("click", () => {
  //verifica se o jogador já clicou anteriormente no botão
  if (respErros.innerText.includes("*")) {
    alert("Você já solicitou a dica...");
    frm.inLetra.focus();
    return;
  }

  //exibe a dica
  respDica.innerText = " * " + dicaSorteada;
  respErros.innerText = "*"; //acrescenta "*" nos erros

  //diminue 1 em chances
  const chances = Number(respChances.innerText) - 1;
  //mostra o nº de Chances
  respChances.innerText = chances;

  //troca imagem
  trocarStatus(chances);

  //verifica se atingiu limite de chances
  verificarFim();

  //joga o foco para inLetra
  frm.inLetra.focus();
});

//função trocar status
const trocarStatus = (num) => {
  if (num >= 0) imgStatus.src = `/cap11/img/status${num}.jpg`;
};

frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o envio do form

  //obtém o conteúdo do campo inLetra
  const letra = frm.inLetra.value.toUpperCase();

  //obtém o conteúdo dos elementos da página
  let erros = respErros.innerText;
  let palavra = respPalavra.innerText;

  //verifica se a letra apostada já consta em erros ou na palavra
  if (erros.includes(letra) || palavra.includes(letra)) {
    alert("Você já usou esta letra");
    frm.inLetra.focus();
    return;
  }
  // se letra consta em palavraSorteada
  if (palavraSorteada.includes(letra)) {
    let novaPalavra = ""; //para compor novaPalavra

    //for para montar a palavra a ser exibida
    for (let i = 0; i < palavraSorteada.length; i++) {
      //se igual a letra apostada, acrescenta esta letra na exibição
      if (palavraSorteada.charAt(i) == letra) {
        novaPalavra += letra;
      } else {
        novaPalavra += palavra.charAt(i); //senão, acrescenta letra ou "_" existente
      }
    }
    respPalavra.innerText = novaPalavra; //exibe novaPalavra
  } else {
    respErros.innerText += letra; //acrescenta letra aos erros
    const chances = Number(respChances.innerText) - 1; //diminui nº de chances
    respChances.innerText = chances; //exibe novo nº de chances

    trocarStatus(chances); //troca a imagem
  }

  //verifica se já ganhou ou perdeu
  verificarFim();
  frm.inLetra.value = "";
  frm.inLetra.focus();
});

const verificarFim = () => {
  const chances = Number(respChances.innerText); //obtém o nº de chances

  if (chances == 0) {
    respMensagemFinal.className = "display-3 text-danger";
    respMensagemFinal.innerText = `Ah... é ${palavraSorteada}. Você Perdeu!`;
    concluirJogo();
  } else if (respPalavra.innerText == palavraSorteada) {
    respMensagemFinal.className = "display-3 text-primary";
    respMensagemFinal.innerText = "Parabéns!! Você Ganhou.";
    trocarStatus(4); //Exibe a figura feliz
    concluirJogo();
  }
};

//modifica o texto da dica e desabilita os botões de jogar
const concluirJogo = () => {
  respDica.innerText = "* clique no botão 'iniciar jogo' para jogar novamente";
  frm.inLetra.disabled = true;
  frm.btJogar.disabled = true;
  frm.btVerDica.disabled = true;
};
