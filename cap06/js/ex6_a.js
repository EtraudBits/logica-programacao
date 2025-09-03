//obtém elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
//criar vetor global de clubes
const clube = []; //criamos uma array vazia para guardar os nomes dos clubes.

//cria um ouvite para quando o botão submit for clicado - Espera o usuario digitar um clube e clicar em "Adicionar"
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado
  //obtém dados do form
  const nome = frm.inClube.value;

  clube.push(nome); //O valor digita do no campo Clube é obtido e adicionado ao vetor clube usando o .push()
  frm.inClube.value = ""; //o campo de texto é limpo
  frm.inClube.focus(); //o Cursor Volta para ele com .focus()
}); //fim do bloco submit
//se o usuario clicar em "Listar Clubes"
frm.btListar.addEventListener("click", () => {
  if (clube.length == 0) {
    //se a lista estiver vazia o alerta aparecerá, caso contrario percorre a lista com .forEach() e monta uma string formatada, com a posição e o nome de cada clube.
    alert("Nenhum Clube adicionado");
    return; //...retorna
  }
  let lista = ""; //vareavel lista em string
  clube.forEach((clube, i) => {
    //montar uma lista formatada
    lista += `${i + 1}. ${clube}\n`;
  });
  resp.innerText = lista; //exibe em pre a string lista
}); //fim do bloco Listar
//se o usuario clicar em "Montar Tabela de jogos"
frm.btMontar.addEventListener("click", () => {
  if (clube.length == 0) {
    //se a lista estiver vazia o alerta aparecerá
    alert("Nenhum clube foi adicionado");
    return; //...retorna
  }
  if (clube.length % 2 !== 0) {
    //se o numeros de clubes não for par, o alerta aparecerá, caso contrario, se tudo estiver certo o "for" monta os confrontos.
    alert(
      "Número de Clubes insuficiente, adicione mais um para montar os jogos."
    );
    return; //...retorna
  }
  let jogos = ""; //cria uma string

  for (let i = 0; i < clube.length / 2; i++) {
    const adversario = clube[clube.length - 1 - i];
    jogos += `${clube[i]} x ${adversario}\n`;
  }
  resp.innerText = jogos; //exibe a resp. da string jogos
});
