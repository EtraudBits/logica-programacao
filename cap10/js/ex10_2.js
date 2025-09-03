//obter elementos da página
const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

window.addEventListener("load", () => {
  //gera números aleatórios, entre 1 e 5, para cada moeda
  const num1_00 = Math.ceil(Math.random() * 5);
  const num0_50 = Math.ceil(Math.random() * 5);
  const num0_25 = Math.ceil(Math.random() * 5);
  const num0_10 = Math.ceil(Math.random() * 5);

  //define texto altenartivo das imagens (acessibilidade)
  const alt1_00 = "Moeda de um Real";
  const alt0_50 = "Moeda de Cinquenta Centavos";
  const alt0_25 = "Moeda de Vinte e Cinco Centavos";
  const alt0_10 = "Moeda de Dez Centavos";

  //chama o método criarMoedas passando os argumentos
  criarMoedas(num1_00, "1-real.jpg", alt1_00, "moeda1-00");
  criarMoedas(num0_50, "50-centavos.jpg", alt0_50, "moeda0-50");
  criarMoedas(num0_25, "25-centavos.jpg", alt0_25, "moeda0-25");
  criarMoedas(num0_10, "10-centavos.jpg", alt0_10, "moeda0-10");
});

//chama a função criarMoedas, passando os argumentos relativos a cada moeda que deve ser criada.
const criarMoedas = (num, moeda, textoAlt, classe) => {
  //cria laço de repetição parainserir várias imagens de moedas na pagina
  for (let i = 1; i <= num; i++) {
    //cria elementos de img
    const novaMoeda = document.createElement("img");
    novaMoeda.src = "img/" + moeda; //atibuto src
    novaMoeda.Alt = textoAlt; //texto alternativo
    novaMoeda.className = classe; //classe da moeda (css)
    dvMoedas.appendChild(novaMoeda); //hierarquia DOM
  }
  const br = document.createElement("br"); //cria uma quebra de linha (br)
  dvMoedas.appendChild(br);
};
//cria o ouvite pra quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado

  const soma = Number(frm.inSoma.value); //valor informado pelo o usuario
  const moedas = dvMoedas.querySelectorAll("img"); //obtem imagens filhas de dvMoedas
  let totalMoedas = 0; //declara e inicaliza aculador

  //percorre as tag img (em moedas) e verifica propriedade className
  for (const moeda of moedas) {
    if (moeda.className == "moeda1-00") {
      totalMoedas += 1; //acumula 1 (para moedas de 1)
    } else if (moeda.className == "moeda0-50") {
      totalMoedas += 0.5; //acumula 0.50 (para moedas de 0.50)
    } else if (moeda.className == "moeda0-25") {
      totalMoedas += 0.25; // acumula 0.25 (para moedas de 0.25)
    } else {
      totalMoedas += 0.1; // acumula 0.10 (para moedas de 0.10)
    }
  }
  const div = document.createElement("div"); //cria elemento div
  const h3 = document.createElement("h3"); //cria elemento h3

  let mensagem;

  //verifica se o valor informado é igual ao total de moedas exibido
  if (soma == totalMoedas.toFixed(2)) {
    div.className = "alert alert-success"; //define a classe da div
    mensagem = "Parabéns!! Você acertou!"; //mensagem a ser exibida
  } else {
    div.className = "alert alert-danger";
    mensagem = `Ops.. A resposta correta é ${totalMoedas.toFixed(2)}`;
  }
  const texto = document.createTextNode(mensagem); //cria elemento de texto
  h3.appendChild(texto); //texto é filho de h3
  div.appendChild(h3); //h3 é filho de div criada na function
  dvMoedas.appendChild(div); //div é filho de dvMoedas

  frm.submit.disabled = true; //desabilita botao (resposta já foi exibida)
});

frm.addEventListener("reset", () => {
  window.location.reload();
});
