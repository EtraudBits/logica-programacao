//obtém elementos do form
const frm = document.querySelector("form"); // obtém o form
const resp = document.querySelector("h3"); // obtém a resposta

//cria um ouvite para quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  // ouvinte para o evento submit
  e.preventDefault(); //evita que o form seja enviado
  let frase = frm.inFrase.value.toUpperCase(); // obtém a frase do input e converte para maiúscula
  let fraseSemEspaco = frase.replace(/\s/g, ""); // remove os espaços da frase
  //inverter a frase
  let fraseInvertida = ""; // cria uma variável para armazenar a frase invertida
  for (let i = fraseSemEspaco.length - 1; i >= 0; i--) {
    // percorre a frase de trás para frente
    fraseInvertida += fraseSemEspaco[i]; //inverte a frase
  }
  //faz a comparação
  if (fraseSemEspaco == fraseInvertida) {
    // compara a frase original com a invertida
    resp.innerText = `${frase} é um palíndromo`; // exibe a resposta em caixa alta
  } else {
    // se não forem iguais
    resp.innerText = `${frase} não é um Palíndromo`; // exibe a resposta em caixa alta
  } // fecha o if
}); //fim do ouvinte para o evento submit
