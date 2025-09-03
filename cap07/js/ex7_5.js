//obtém elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria ouvite para quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado

  //obtem os elementos do preenchimento
  let funcionario = frm.inFuncionario.value.toLowerCase();
  funcionario = funcionario.trim();

  if (!funcionario.includes(" ")) {
    //se não houver espaços vazios, para sibolizar o nome completo, o alerta aparece.
    alert("Digite seu Nome Comprelo, sem apreveaturas!");
    frm.inFuncionario.focus(); //o curso volta para o campo para ser digitado novamente
    return; //.. retorna
  }

  const partes = funcionario.split(" "); //divide em vetor, criado a cada espaço
  let email = ""; //array universal (concatenará as letras)
  const tam = partes.length; //obtém numeros de itens do vetor partes

  for (let i = 0; i < tam - 1; i++) {
    //percorre itens do vetor, menos o ultimo.
    email += partes[i].charAt(0); //obtém a letra inicial de cada item
  }

  //concatena as letras iniciais com a útima parte (sobrenome) e empresa
  email += partes[tam - 1] + "@empresa.com.br";

  resp.innerText = `E-mail: ${email}`; //Exibe a resposta
});
