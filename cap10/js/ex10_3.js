//Obtém os elementos da página
const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table"); //chama a tabela criada

//cria um ouvite para quando o botão submit for clicado.
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado

  //obtem dados dos campos do form
  const titulo = frm.inTitulo.value;
  const genero = frm.inGenero.value;

  inserirLinha(titulo, genero); //chama function que insere filmes na tabela
  gravarFilme(titulo, genero); //chama funcion que grava dados em localStorage

  frm.reset(); //limpa campos do form
  frm.inTitulo.focus(); //posiciona o cursor em inTitulo
});

//função inserir linha
const inserirLinha = (titulo, genero) => {
  const linha = tbFilmes.insertRow(-1); //adiciona uma linha na tabela

  //cria colunas na linha inserida.

  const col1 = linha.insertCell(0); //inseri 1º coluna (1 sempre começa no zero)
  const col2 = linha.insertCell(1); //inseri a 2ª coluna
  const col3 = linha.insertCell(2); //inseri a 3ª coluna

  //joga o conteudo em cada celula da tabela
  col1.innerText = titulo; //1ª coluna será o titulo
  col2.innerText = genero; //2ª coluna será o genero
  col3.innerHTML = "<i class ='exclui' title='Excluir'>&#10008</i>"; //usa-se innerHTML, pois é a form segura de utilizar essa propriedade, visto que o conteúdo a ser renderizado não vem de um campo preenchido pelo o usuário, e sim de um dado fixo inserido pelo programa.
};

// função gravar em localStorage - para separar os filmes usa-se um delimitador ","
const gravarFilme = (titulo, genero) => {
  //se houver dados savos em localStorage
  if (localStorage.getItem("filmesTitulo")) {
    //... obtém os dados e acrescenta "," e o título/Genero informado
    const fimlesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
    const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

    //grava dados em localStorage
    localStorage.setItem("filmesTitulo", fimlesTitulo);
    localStorage.setItem("filmesGenero", filmesGenero);
  } else {
    //senão, é a primeira inclusão (salva em delimitador)
    localStorage.setItem("filmesTitulo", titulo);
    localStorage.setItem("filmesGenero", genero);
  }
};

//função que recupera os dados dos filmes salvos em locaStorage
window.addEventListener("load", () => {
  //carrega a página
  if (localStorage.getItem("filmesTitulo")) {
    //obém conteúdo e converte em elmentos de vetor (na ocorrência ";")
    const titulos = localStorage.getItem("filmesTitulo").split(";");
    const generos = localStorage.getItem("filmesGenero").split(";");
    //percorre os elementos do vetor e os insere na tabela
    for (let i = 0; i < titulos.length; i++) {
      inserirLinha(titulos[i], generos[i]);
    }
  }
});
// função que remove o filme, tanto da tabela quanto do localStorage
tbFilmes.addEventListener("click", (e) => {
  //se a classe do elemento alvo clicado contém exclui
  if (e.target.classList.contains("exclui")) {
    // acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho
    const titulo = e.target.parentElement.parentElement.children[0].innerText;

    if (confirm(`confirma Exclusão do Filme "${titulo}"?`)) {
      //remove a linha da tabela, correspondente ao simbolo de excluir clicado
      e.target.parentElement.parentElement.remove();

      //exclui filmes salvos em localStorage
      localStorage.removeItem("filmesTitulo");
      localStorage.removeItem("filmesGenero");

      //salva novamente (se existir), acesando o conteúdo da tabela
      for (let i = 0; i < tbFilmes.rows.length; i++) {
        //obtém o conteúdo da tabela (coluna : titulo; coluna 1: genero)
        const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
        const auxGenero = tbFilmes.rows[i].cells[1].innerText;
        gravarFilme(auxTitulo, auxGenero); //chama gravarFilme com dados da tabela
      }
    }
  }
});
