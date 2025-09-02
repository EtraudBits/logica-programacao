//cria referência ao form e aos elementos h3 e h4 (respotas)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um "ouvite" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value; //obtem conteúdo do campo Titulo do Filme
  const duracao = Number(frm.inDuracao.value); //obtem conteúdo do campo Duração do Filme
  const horas = Math.floor(duracao / 60); //arrendoda o conteúdo do campo duração do filme para baixo e divide por 60 (60 minutos que é 1 hora)
  const minutos = duracao % 60; //pega o resto (% = modulo) da duração do filme
  resp1.innerText = titulo; //exibe a resposta do titulo do filme
  resp2.innerText = `${horas} hora (s) e ${minutos} minuto (s)`; //exibe a resposta da duração do fime
  e.preventDefault(); //evita o envio do formulario (não deixa atualizar a pagina e perder as informações)
});
