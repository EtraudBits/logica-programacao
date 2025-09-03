//obtem os elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("span");

//cria um ouvite quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que o form seja enviado
  //obtem o elemento do campo a ser digitado
  const fruta = frm.inFruta.value.toUpperCase(); //toUpperCase() -> maiúscula
  let resposta = ""; //string que irá conter a resposta

  for (const letra of fruta) {
    //percorre todos os caracteres da fruta
    if (letra == fruta.charAt(0)) {
      //se letra igual a letra inicial da string... 0 porque e a primeira letra da string
      resposta += fruta.charAt(0); //adiciona a letra inicial
    } else {
      //senão, ...
      resposta += "_"; //... adiciona o sublinhado
    }
  }
  resp.innerText = resposta; //exibe a resposta
  frm.inFruta.value = "*".repeat(fruta.length); //preenche com "*", conforme o tamanho
});
