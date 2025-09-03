// Função que gera traços conforme o nome do altelta
//Exemplo: "Ana Maria" -> "--- -----"
const retornarTracos = (nome) => {
  // [... nome] transforma a string em um array de caracteres
  // map() percorre cada caractere e troca letras por "-" e espaços mantidos
  // join("") junta tudo de forma em uma string
  return [...nome].map((c) => (c == " " ? " " : "-")).join(""); //operador Tenario (se c four igual a espado verdadeiro caso contrario usa -)
};

//função que classifica a cateria conforme a idade
//não vamos o usar o if e else, vamos usar o return
const categorizarAluno = (idade) => {
  if (idade <= 12) return "Infantil"; //o return quando executado, a função já termina, ou seja, o codigo que vem depois não é mais lido.
  if (idade <= 18) return "Juvenil"; //o return quando executado, a função já termina, ou seja, o codigo que vem depois não é mais lido.
  return "Adulto"; //o return quando executado, a função já termina, ou seja, o codigo que vem depois não é mais lido.
};
//obtem os elementos dor form
const frm = document.querySelector("form");
const resultado = document.querySelector("#outResultado");
//função principal, chamada quando o formulario for enviado (submit for clicado)
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita enviar o form

  //obtém o que estasendo digitado no campos for form (html)
  const nome = frm.inAtleta.value;
  const idade = parseInt(frm.inIdade.value); //(parseInt, mantem em número inteiro)

  //aviso quando algum campo estiver vazio
  if (!nome || isNaN(idade)) {
    alert("Preencha o nome e idade corretamente");
    return; //... retorna
  }
  //usa a função retornaTracos() para gerar a linha de traços
  const tracos = retornarTracos(nome);
  //usa a função categorizarAluno() para informar a categoria do atleta
  const categoria = categorizarAluno(idade);
  //exibe a resposta no pre (html)
  resultado.innerText = `${nome}\n${tracos}\nCategoria: ${categoria}`;
});
