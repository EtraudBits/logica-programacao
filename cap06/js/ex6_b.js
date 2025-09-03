//obtem dados do form
const frm = document.querySelector("form");
const respNumeros = document.querySelector("#outNumeros");
const respAtencao = document.querySelector("#outAtencao");

const numeros = []; //vetor global

//cria um ouvite para quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  //obtem campo do form
  const numero = Number(frm.inNumero.value);

  if (numeros.includes(numero)) {
    alert(`O Número ${numero}, já foi Digitado`);
    frm.inNumero.value = "";
    frm.inNumero.focus();
    return; //..retorna
  }
  numeros.push(numero); //adiciona ao vetor
  respNumeros.innerText = `Números: ${numeros.join(", ")}`;
  respAtencao.innerText = ""; //limpa mensagem de verificação anterior

  frm.inNumero.value = "";
  frm.inNumero.focus();
}); //fim do bloco submit
//evento de verificar se os números estão em ordem quando clica no botão verificar
document.querySelector("#btVerificar").addEventListener("click", () => {
  if (numeros.length == 0) {
    //se o vetor numeros estiver vazio aparecerá o alerta
    alert("Adicione números primeiros.");
    return; //... retorna
  }
  let emOrdem = true; //se estiver em ordem verdadeiro

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      emOrdem = false; //se o 1º numero for menor que os demais é falso, não esta em ordem)
      break; //para o programa
    }
  } //fim do bloco for
  if (emOrdem) {
    respAtencao.innerText = "Números estão em ordem Crescente";
  } else {
    respAtencao.innerText = "Números não estão em ordem crescente";
  }
});
