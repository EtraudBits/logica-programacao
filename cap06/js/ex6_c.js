// obter elementos do DOM
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// vetor para armazenar os candidatos
const candidatos = [];

// evento ao adicionar candidato
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inCandidato.value;
  const acertos = Number(frm.idAcertos.value);

  if (nome === "" || isNaN(acertos)) {
    alert("Preencha corretamente os campos.");
    return;
  }

  // adiciona candidato ao vetor como objeto
  candidatos.push({ nome, acertos });

  // limpa os campos
  frm.inCandidato.value = "";
  frm.idAcertos.value = "";
  frm.inCandidato.focus();

  // atualiza lista na tela automaticamente
  listarTodos();
});

// função para listar todos os candidatos
function listarTodos() {
  if (candidatos.length === 0) {
    resp.innerText = "Nenhum candidato cadastrado.";
    return;
  }

  const lista = candidatos.reduce((texto, candidato) => {
    return texto + `${candidato.nome} - ${candidato.acertos} acertos\n`;
  }, "");

  resp.innerText = `Lista de Candidatos:\n${"-".repeat(30)}\n${lista}`;
}

// evento do botão Listar Todos
frm.btListar.addEventListener("click", listarTodos);

// evento do botão Aprovados 2ª Etapa
frm.btEtapa.addEventListener("click", () => {
  if (candidatos.length === 0) {
    alert("Nenhum candidato cadastrado.");
    return;
  }

  const notaCorte = Number(prompt("Número de Acertos para Aprovação?"));

  if (isNaN(notaCorte) || notaCorte <= 0) {
    alert("Informe um número válido para a nota de corte.");
    return;
  }

  const aprovados = candidatos
    .filter((cand) => cand.acertos >= notaCorte)
    .sort((a, b) => b.acertos - a.acertos);

  if (aprovados.length === 0) {
    resp.innerText = "Nenhum candidato aprovado.";
    return;
  }

  const lista = aprovados.reduce((texto, candidato) => {
    return texto + `${candidato.nome} - ${candidato.acertos} acertos\n`;
  }, "");

  resp.innerText = `Candidatos Aprovados:\n${"-".repeat(30)}\n${lista}`;
});
