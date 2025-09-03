//obtém elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria ouvite para quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja envido
  //obtém elementos de preenchimento
  let participante = frm.inParticipante.value.toUpperCase(); //deixa tudo maisculo
  participante = participante.trim(); //tira os espaços em branco do inicio e do final

  if (!participante.includes(" ")) {
    //se o campo Participante não tiver mais de um nome, alerta aparece.
    alert("Infome o nome completo!");
    frm.inParticipante.focus() = "" //retorna o curso para o campo para digitar
    return; //... retorna
  }

  let posPrimeiroEspaco = participante.indexOf(" "); //indexOF pega o numero (posição) de caractére, nesse caso do primeiro caractere até o primeiro espaço em branco.
  let posUltimoEspaco = participante.lastIndexOf(" "); //lastIndexOF pega o numero (posição) de caractere, nesse caso do ultimo caractere até o primeiro espaço em branco da direita para a esqueda.

  //substr = substring
  let nome = participante.substr(0, posPrimeiroEspaco); //(Lê)pega do primeiro carectere até o primeiro espaço em branco
  let sobrenome = participante.substring(posUltimoEspaco); //(Lê) pega do ultimo caractere até o primeiro espaço em branco da direita para esqueda

  //resp.innerText = `${posPrimeiroEspaco} e ${posUltimoEspaco}`;
  resp.innerText = `Crachá: ${nome} ${sobrenome}`; //exibe a resposta
});
