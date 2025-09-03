//1. função para inserir uma tag h5 com o texto de cada tarefa digitada pelo o usuario
//cria um ouvite para quando o botão submit (adcionar) for clicado
//obter elementos da pagina
const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro"); //será o PAI

frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado

  //obtém o elemento digitado pelo o usuario
  const tarefa = frm.inTarefa.value;

  //Cria o elemento HTML h5
  const h5 = document.createElement("h5");
  const texto = document.createTextNode(tarefa); //cria um texto

  h5.appendChild(texto); //define que texto será filho de h5
  dvQuadro.appendChild(h5); //e que h5 será filho de divQuadro

  frm.inTarefa.value = ""; //limpa o campo de edição
  frm.inTarefa.focus(); //joga o cursor neste campo
});
//destaca uma tarefa (inserida pelo o usuario)alterando a classe da tag h5 para a tarefa-selecionada.
//ficará vinculada ao click no botão btSelecionar.
frm.btSelecionar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5"); //obtém tags h5 da pagina (todas)

  if (tarefas.length == 0) {
    alert("Nao há tarefas para selecionar"); //se não houver tarefas digitadas exibe o alerta.
    return; // e retorna.
  }
  //variavel auxiliar para indicar linha selecionada
  let aux = -1;

  //percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
  for (let i = 0; i < tarefas.length; i++) {
    //se a tag é da class tarefa-selecionada (está selecionada)
    if (tarefas[i].className == "tarefa-selecionada") {
      tarefas[i].className = "tarefa-normal"; // troca para a normal
      aux = i; //muda valor da variavel auxiliar
      break; //sai da repetição
    }
  }
  //se a linha que esta selecionada é a última, irá voltar para a primeira
  if (aux == tarefas.length - 1) {
    aux = -1;
  }
  tarefas[aux + 1].className = "tarefa-selecionada"; //muda estilo da próxima linha
});
//função para remover a tarefa selecionada
frm.btRetirar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5"); // obtém tags h5 da página (todas)

  let aux = -1; //variavel auxiliar pra indicar linha selecionada

  //percorre a lista das tarefas inseridas na pagina (elementos h5)
  tarefas.forEach((tarefa, i) => {
    if (tarefa.className == "tarefa-selecionada") {
      aux = i; // muda valor da variavel aux
    }
  });
  if (aux == -1) {
    //se não há tarefa selecionada (ou se lista vazia...) exibe o alerta
    alert("Selecione uma tarefa para removê-la...");
    return; // e retorna
  }
  //Solicita confirmação (exibindo o conteúdo da tag h5 selecionada)
  if (confirm(`confirma a exclusão de "${tarefas[aux].innerText}"?`)) {
    dvQuadro.removeChild(tarefas[aux]); //remove um dos filhos de divQuadro (o que estiver selecionada)
  }
});
//função de gravar (armazenar) em localStorage
frm.btGravar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5"); //obtém tags h5 da pagina (todas)

  if (tarefas.length == 0) {
    //se não há tarefas, exibe alerta
    alert("Não há tarefas para serem salvas");
    return; //e retorna
  }

  let dados = ""; //irá "acumular" os dados a serem salvos
  tarefas.forEach((tarefa) => {
    dados += tarefa.innerText + ";"; //acumula conteúdo de cada h5
  });

  //grava os dados em localStorage, removendo o útimo ";"
  localStorage.setItem("tarefasDia", dados.slice(0, -1));

  //confere se dados foram armazenados em localStorage
  if (localStorage.getItem("tarefasDia")) {
    alert("Ok! tarefas salvas");
  }
});
// botão "Limpar tudo"
const btLimpar = document.querySelector("#btLimpar");

btLimpar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5"); // pega todas as tarefas

  if (tarefas.length === 0) {
    alert("Não há tarefas para limpar.");
    return;
  }

  // confirma com o usuário
  if (confirm("Deseja realmente apagar todas as tarefas?")) {
    // remove todas as tarefas da tela
    tarefas.forEach((tarefa) => tarefa.remove());

    // apaga também do localStorage
    localStorage.removeItem("tarefasDia");

    alert("Todas as tarefas foram removidas.");
  }
});

//ação de recuperar as tarefas anteriormente salvas quando a página for carregada.
//associar ao evento load
window.addEventListener("load", () => {
  //verifica se há tarefas salvas no navegador do usuário
  if (localStorage.getItem("tarefasDia")) {
    // cria um vetor (array) com a lista de tarefas (separadas pelo split ";")
    const dados = localStorage.getItem("tarefasDia").split(";");

    //percorre os dados armazenados em localStorage
    dados.forEach((dado) => {
      const h5 = document.createElement("h5"); //cria o elemento HTML h5
      const texto = document.createTextNode(dado); //cria um texto
      h5.appendChild(texto); //define que texto será filho de h5
      dvQuadro.appendChild(h5); // e que h5 será filho de divQuadro
    });
  }
});
