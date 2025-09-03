//obtém elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = []; //declara vetor global
//cria um ouvite para quando o botão submit (adicionar) for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que o form seja enviado
  //obtém o conteudo dos campos
  const nome = frm.inNome.value;
  const idade = Number(frm.inIdade.value);
  criancas.push({ nome, idade }); //adiciona dados ao vetor de objeto (vetor global)
  frm.reset(); //limp camos do form
  frm.inNome.focus(); // direciona o curso para o campo nome
  frm.btListar.dispatchEvent(new Event("click")); //dispara click em btListar
}); //fim do bloco submit
frm.btListar.addEventListener("click", () => {
  if (criancas.length == 0) {
    //se o vetor estiver vazio, emite o alerta
    alert("Não há crianças na lista");
    return; //...retorna
  }
  let lista = ""; //para concatenar lista de crianças (variavel lista é uma string)
  for (const crianca of criancas) {
    const { nome, idade } = crianca; //desestrutura o objeto
    lista += nome + " - " + idade + " anos\n";
  }
  resp.innerText = lista; //exibe a lista
}); //fim do bloco listar
//cria um ouvite para quando o botão resumir for clicado
frm.btResumir.addEventListener("click", () => {
  if (criancas.length == 0) {
    //se o vetor estiver vazio, emite o alerta (execulta o if)
    alert("Não há crianças na lista");
    return; //... retorna
  }
  const copia = [...criancas]; // cria copia do ventor crianças (operador spread "..."(espalhar))
  copia.sort((a, b) => a.idade - b.idade); //ordena pela a idade (metodo sort)
  let resumo = ""; //para concatenar saida (variavel resumo é uma string)
  let aux = copia[0].idade; //menor idade do vetor ordenado
  let nomes = []; //para inserir nomes de cada idade
  for (const crianca of copia) {
    const { nome, idade } = crianca;
    if (idade == aux) {
      //se é da mesma idade auxiliar
      nomes.push(nome); //adiciona ao vetor nomes
    } else {
      //senao, mostra o resmo para cada idade
      resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
      resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
      resumo += "(" + nomes.join(", ") + ")\n\n";
      aux = idade; //obtém a nova idade na ordem
      nomes = []; //limpa o vetor nomes
      nomes.push(nome); //adicona o primeiro da nova idade
    }
  }
  //adiciona a última criança
  resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ")\n\n";
  resp.innerText = resumo; //exibe a resposta
});
