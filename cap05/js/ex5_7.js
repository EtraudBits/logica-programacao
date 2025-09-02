//obtem elementos de form e resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um ouvite para quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num = Number(frm.inNumero.value);

  let estrela = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrela = estrela + "*";
    } else {
      estrela = estrela + "-";
    }
  }
  resp.innerText = estrela;
});
