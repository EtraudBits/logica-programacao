//cria referencia ao form aos elementos dos h3 (respostas)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

//cria ouvite quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  //obtém o conteúdo dos campos
  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);

  const promocao = preco * 0.5; //calcula 50% do produto
  const total = preco * 3 - promocao; //calcula o desconto

  resp1.innerText = `${produto} - Promoção: leve 3 por R$: ${total.toFixed(2)}`;
  resp2.innerText = `O 3º Produto custa apenas R$: ${promocao.toFixed(2)}`;

  e.preventDefault();
});
