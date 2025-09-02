//cria ref. ao form e ao elementos da resp.
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria ouvite para quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);

  if (numero % 2 === 0) {
    resp.innerText = `${numero} é Par`;
  } else {
    resp.innerText = `${numero} é Impar`;
  }
});
