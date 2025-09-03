// obtém elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

//vetor global para armazenar os itens do pedido
const itens = [];

frm.rbPizza.addEventListener("click", () => {
  //
  //quando radio button é clicado
  frm.inBebida.className = "oculta"; //oculta select das bebidas (A propriedade className indica o estilo, definido no arquivo css)
  frm.inPizza.className = "exibe"; //exibe select das pizzas (A propriedade className indica o estilo, definido no arquivo css)
});

frm.rbBebidas.addEventListener("click", () => {
  frm.inPizza.className = "oculta"; //oculta select das pizza (A propriedade className indica o estilo, definido no arquivo css)
  frm.inBebida.className = "exibe"; //exibe select das bebidas (A propriedade className indica o estilo, definido no arquivo css)
});

frm.inDetalhes.addEventListener("focus", () => {
  //quando o campo recebe o foco (o curso estiver no campo)
  if (frm.rbPizza.checked) {
    // se o radiobutton rbPizza estiver marcado
    const pizza = frm.inPizza.value; //obtém value do item selecionado
    // uso do operador ternário, para indicar o número de sabores
    const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
    //atributo placeholde exibe uma dica de preenchimento do campo (fica aparecendo no campo até que seja clicado)
    frm.inDetalhes.placeholder = `Até ${num} sabores`;
  }
});

frm.inDetalhes.addEventListener("blur", () => {
  //quando campo perde o foco
  frm.inDetalhes.placeholder = ""; //limpa a dica de preenchimento
});

//cria um ouvite para o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja envidado
  let produto;
  if (frm.rbPizza.checked) {
    const num = frm.inPizza.selectedIndex; //obtém nº do item selecionado
    produto = frm.inPizza.options[num].text; //texto do item selecionado
  } else {
    const num = frm.inBebida.selectedIndex;
    produto = frm.inBebida.options[num].text;
  }
  const detalhes = frm.inDetalhes.value; //conteúdo do inDetalhes
  itens.push(produto + " (" + detalhes + ")"); //adiciona ao vetor
  resp.innerText = itens.join("\n"); //exibe os itens do produto

  frm.reset(); //limpa o form
  frm.rbPizza.dispatchEvent(new Event("click")); //dispara click em rbPizza
});
