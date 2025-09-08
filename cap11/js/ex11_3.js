//cria referencia ao form
const frm = document.querySelector("form");

//cria o ouvite para quando o botão submit for clicado.
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que o form seja enviado.

  //obtém contéudo dos campos (.trim) remove espaços na palavra no inicio e fim
  const palavra = frm.inPalavra.value;
  const dica = frm.inDica.value;

  //valida preenchimento (palavra não pode possuir espaço em branco no meio) ou seja, não pode ser frases, caso seja uma palavra composta deve conter ("-")
  if (palavra.includes(" ")) {
    alert("informe uma palavra válida (sem esapaços)");
    frm.inPalavra.focus(); //volta para o campo inPalavra
    return;
  }
  //se já existe dados em localStorage, grava conteúdo anterior+";"+palavra / dica
  if (localStorage.getItem("jogoPalavra")) {
    localStorage.setItem(
      "jogoPalavra",
      localStorage.getItem("jogoPalavra") + ";" + palavra
    );
    localStorage.setItem(
      "jogoDica",
      localStorage.getItem("jogoDica") + ";" + dica
    );
  } else {
    //senão, é a primeira inclusão: grava apenas a plavra / dica
    localStorage.setItem("jogoPalavra", palavra);
    localStorage.setItem("jogoDica", dica);
  }
  //verifica se salvou
  if (localStorage.getItem("jogoPalavra")) {
    alert(`Ok, Palavra ${palavra} cadastrada com Sucesso`);
  }
  frm.reset(); //limpa o form
  frm.inPalavra.focus(); //joga o foco em inPalavra
});
