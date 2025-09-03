//obtem elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const btDecriptografar = document.querySelector("#btDecriptografar");

//cria um ouvinte de evento para o botão submit
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  //pega o texto digitado pelo usuário
  const mensagem = frm.inMensagem.value;

  let pares = ""; //variavel para armazenar os pares
  let impares = ""; // variavel para armazenar os impares

  for (let i = 0; i < mensagem.length; i++) {
    //percorre a string
    if (i % 2 == 0) {
      // se o índice for par
      pares += mensagem.charAt(i); //adiciona o caractere ao pares
    } else {
      impares = mensagem.charAt(i); // adiciona o caractere ao impares
    }
  }
  //cria uma string com os pares e impares
  const criptografada = pares + impares;
  resp.innerText = criptografada; //exibe a string criptografada (resposta)
});

//cria um ouvinte de evento para o botão decriptografar
btDecriptografar.addEventListener("click", () => {
  //pega o texto digitado pelo usuário
  const mensagem = resp.innerText; // pega a mensagem criptografada

  const meio = Math.ceil(mensagem.length / 2); // calcula o meio da string

  const pares = mensagem.substring(0, meio); // pega os pares (primeira metade)
  const impares = mensagem.substring(meio); // pega os impares (segunda metade)

  let original = ""; // variavel para armazenar a mensagem original

  for (let i = 0; i < meio; i++) {
    // percorre a metade da string
    if (i < pares.length) {
      // se o índice for menor que a metade da string
      original += pares.charAt(i); // adiciona o caractere ao original
    }
    if (i < impares.length) {
      // se o índice for menor que a metade da string
      original += impares.charAt(i); // adiciona o caractere ao original
    }
  }
  resp.innerText = original; // exibe a mensagem original
});
