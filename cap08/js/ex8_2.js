// obtém os elementos do form
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

//obtém o ouvite quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado
  //obtém os dados do preenchimento
  const modelo = frm.inModelo.value;
  const ano = Number(frm.inAno.value);
  const preco = Number(frm.inPreco.value);
  //chama função e atribui
  const classificacao = classificarVeiculo(ano);
  //... retorno às variáveis
  const entrada = calcularEntrada(preco, classificacao);
  //usa retorno da função para calculo
  const parcela = (preco - entrada) / 10;

  //exibe as respostas
  resp1.innerText = modelo + " - " + classificacao;
  resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
  resp3.innerText = `10x de R$: ${parcela.toFixed(2)}`;
});
//função recebe o ano do veiculo como parametro
const classificarVeiculo = (ano) => {
  const anoAtual = new Date().getFullYear(); // obtém o ano atual
  let classif;
  if (ano == anoAtual) {
    //condições para definir classifcação do veiculo (se ano atual for igual ao ano do veiculo classifica-se como Novo)
    classif = "Novo";
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    //se ano atual for igual a 1 ou 2 anos a menos do veiculo, classifica-se como Seminovo
    classif = "Seminovo";
  } else {
    classif = "Usado"; //caso o ano atual for maior que 2 anos do veiculo, classifica-se como Usado
  }
  return classif; //retorna a classificação
};
//funcao recebe valor e status do vaiculo como parametro
const calcularEntrada = (valor, status) =>
  status == "Novo" ? valor * 0.5 : valor * 0.3; // se o status for novo a entrada será 50%, caso contrario será de 30%
