//obtem os elementos
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
//declarar um vetor global
const carros = [];

//cria um ouvite para quando o botao submit (Adicionar) for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o formulario seja atualizado
  //obtem os dados do formulario
  const modelo = frm.inModelo.value;
  const preco = Number(frm.inPreco.value);
  carros.push({ modelo, preco }); //adiciona dados ao vetor de objetos no final da array
  //limpa os dados do form
  frm.inModelo.value = "";
  frm.inPreco.value = "";
  //envia o curso novamente para o campo Modelo
  frm.Modelo.focus();
  //dispara um evendo de click em btLista (botão listar tudo) (equivale a um click no botão da pagina)
  frm.btListar.dispatchEvent(new Event("click"));
}); //fim do bloco submit
//cria um ouvite para quando o botal listar for clicado.
frm.btListar.addEventListener("click", () => {
  if (carros.length == 0) {
    //se tamanho do vetor é igual a 0 aparecerá mensagem do alerta (.length = propriedade ue retorna o tamanho do vetor,ou seja, quantos elementos ele tem.)
    alert("Não há carros na Lista");
    return; //... retorna
  }
  //método reduce() concatena uma string, obetendo modelo e preço de cada veiculo
  const lista = carros.reduce(
    (acumulador, carro) =>
      acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n",
    ""
  );
  resp.innerText = `Lista dos Carros Cadastrado\n${"-".repeat(40)}\n${lista}`;
}); //fim do bloco listar
//cria um ouvite quando o botão Filtrar for clicado
frm.btFiltrar.addEventListener("click", () => {
  const maximo = Number(
    prompt("Qual o valor máximo que o cliente deseja pagar?")
  );
  if (maximo == 0 || isNaN(maximo)) {
    //se não inoformou o valor Invalido
    return; //... retorna
  }
  //cria um novo vetor com os objetos que atendem a condição de filtro
  const carrosFilter = carros.filter((carro) => carro.preco <= maximo); //condição que diz que será menor igual ao valor digitado
  if (carrosFilter.length == 0) {
    //se tamanho do vetor é igual a 0 aparecerá mensagem do alerta (.length = propriedade ue retorna o tamanho do vetor,ou seja, quantos elementos ele tem.)
    alert("Não há carros com preços inferior ou Igual ao solicitado");
    return; //... retorna
  }
  let lista = "";
  for (const carro of carrosFilter) {
    //percorre cada elemento do array
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${"-".repeat(
    40
  )}\n${lista}`;
}); //fim do bloco Filtrar
//cria um ouvite quando o botão Simulador for clicado
frm.btSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Qual o percentual de desconto:"));
  if (desconto == 0 || isNaN(desconto)) {
    //se não informou ou valor inválido
    return; //...retorna
  }
  const carrosDesc = carros.map((aux) => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto) / 100,
  }));
  let lista = ""; //começa com vazio
  for (const carro of carrosDesc) {
    //percorre cada elemento da array
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(
    40
  )}\n${lista}`;
}); //fim do bloco Simulador
