// função que valida se o nome é completo (tem que ter pelo menos duas palavras)
const validarNome = (nome) => {
  const partes = nome.trim().split(" "); //trim() remove os espaços do inicio e do final e o split(" ") separa por espaço.
  return partes.length >= 2; //verdadeiro (true) se tiver 2 ou mais palavras
};

//função que retorna o sobrenome (última palavra do nome) em minúsculas.
const obterSobrenome = (nome) => {
  const partes = nome.trim().split(" ");
  return partes[partes.length - 1].toLowerCase(); //ultima palavra em minúsculo
};

//função que conta o número de vogais do nome completo
const contarVogais = (nome) => {
  const vogais = ["a", "e", "i", "o", "u"]; //cria um array com as vogais
  //split transforma a string em array de letras, filter seleciona as vogais
  const numVogais = [...nome.toLowerCase()].filter((letras) =>
    vogais.includes(letras)
  ).length;
  //retorna o número com dois digitos
  return String(numVogais).padStart(2, "0"); //padStart (2, "0") com dois digitos o inicio deve começar com 0 (zero)
};
//obtem os elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//função principal, cria o ouvite quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o form ser enviado

  //obtem os elementos digitados
  const nomeCompleto = frm.inAluno.value;

  //valida se o nome é completo
  if (!validarNome(nomeCompleto)) {
    alert("Nome invalido - Digite o nome completo!");
    return; //... retorna
  }
  // obter sobrenome e numeros de vogais
  const sobrenome = obterSobrenome(nomeCompleto);
  const numeroVogais = contarVogais(nomeCompleto);

  //(montar a senha)
  const senha = `${sobrenome}${numeroVogais}`;

  // exibir resposta
  resp.innerText = `Senha Inicial: ${senha}`;
});
