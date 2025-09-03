//obtém elements da pagina
const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = []; //vetor de escopo global com numeros já apostados
const sorteado = Math.floor(Math.random() * 100) + 1; //número aleatório entre 1 e 100
const CHANCES = 6; //constante com o número maximo de chances

//"escuta" evento submit do form
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que o form seja enviado (a pagina não atualiza, perdendo os dados)
  const numero = Number(frm.inNumero.value); //obtém o numero digitado pelo o usuario
  if (numero == sorteado) {
    //se o usuario digitou o numero certo
    respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
    //perga o id="btSubmit" e "btNovo" do html
    frm.btSubmit.disabled = true; //troca status dos botões
    frm.btNovo.className = "exibe"; //sai da classe .oculta para a classe .exibe (css)
  } else {
    if (erros.includes(numero)) {
      //se número existe no vetor erros (já foi digitado "apostado")
      alert(`Você já apostou o número ${numero}. Tente outro...`);
    } else {
      erros.push(numero); //adiciona número ao vetor
      const numErros = erros.length; //obtém numero do vetor
      const numChances = CHANCES - numErros; //calcula o número de chances
      //exibe nº de erros, conteúdo do vetor e nº de chances
      respErros.innerText = `${numErros} (${erros.join(", ")})`;
      respChances.innerText = numChances;
      if (numChances == 0) {
        alert("Suas Chances Acabaram...");
        //perga o id="btSubmit" e "btNovo" do html
        frm.btSubmit.disabled = true; //troca status dos botões
        frm.btNovo.className = "exibe"; //sai da classe .oculta para a classe .exibe (css)
        respDica.innerText = `Game Over! número Sorteado: ${sorteado}`;
      } else {
        // usa operador ternário para mensagem da dica
        const dica = numero < sorteado ? "maior" : "menor";
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
      }
    }
  }
  frm.inNumero.value = ""; //limpa campo de Entrada
  frm.inNumero.focus(); //posiciona curso neste campo
}); // fim do evento submit
//ficar fora do evento submit
frm.btNovo.addEventListener("click", () => {
  location.reload(); //reacarrega a página
});
