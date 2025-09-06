//captura elementos da pagina
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

//constante com o número de poltronas do teatro
const POLTRONAS = 240;

//vetor com as poltronas reservadas pelo o cliente
const reservadas = [];

window.addEventListener("load", () => {
  //operador tenário: se houver dados salvos em localStorage, faz um split (";") e
  // atribui esses dados ao array, caso contrário, o array é inicializado vazio
  const ocupadas = localStorage.getItem("teatroOcupado")
    ? localStorage.getItem("teatroOcupado").split(";")
    : [];

  //repetição para montar o nº total de poltronas (definida na constante)
  for (let i = 1; i <= POLTRONAS; i++) {
    const figure = document.createElement("figure"); //cria tag figure
    const imgStatus = document.createElement("img"); //cria tag img

    //se a posição consta em ocupado, exibe a imagem ocupada, senão, disponivel
    imgStatus.src = ocupadas.includes(i.toString())
      ? "/cap11/img/Ocupada.jpg"
      : "/cap11/img/Disponível.jpg";
    imgStatus.className = "poltrona"; //classe com dimesao da img
    const figureCap = document.createElement("figcaption"); //cria figcaption

    //quantidade de zeros antes do número da poltrona
    const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

    //cria texto
    const num = document.createTextNode(`[${zeros}${i}]`);

    //define os pais de cada tag criada
    figureCap.appendChild(num);
    figure.appendChild(imgStatus);
    figure.appendChild(figureCap);

    //se i modulto 24 == 12 (é o corredor: define margem direita 60px)
    if (i % 24 == 12) figure.style.marginRight = "60px";

    //indica que figure é filha de divPalco
    dvPalco.appendChild(figure);

    //se i modulo 24 == 0: o comando após && será executado (insere quebra de linha)
    i % 24 == 0 && dvPalco.appendChild(document.createElement("br"));
  }
});
//cria o ouvite para o botão submit quando clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que o form seja enviado

  //obtém conteúdo de inPoltrona
  const poltrona = Number(frm.inPoltrona.value);

  //valida o preenchimento do campo de entrada... não pode ser maior que a const
  if (poltrona > POLTRONAS) {
    alert("informe um número de poltrona válido - De: 001 a 240");
    frm.inPoltrona.focus();
    return;
  }

  const ocupadas = localStorage.getItem("teatroOcupado")
    ? localStorage.getItem("teatroOcupado").split(";")
    : [];

  //se poltrona escolhida já esta ocupada (existe localStorage)
  if (ocupadas.includes(poltrona.toString())) {
    alert(`Poltrona ${poltrona} já esta ocupada...`);
    frm.inPoltrona.value = "";
    frm.inPoltrona.focus();
    return;
  }

  //captura imagem da poltrona, filha de divPalco. É =1 pois começa em 0
  const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1];

  //modifica atributo da imagem
  imgPoltrona.src = "/cap11/img/Reservado.jpg";

  //adiciona poltrona ao vetor reservadas
  reservadas.push(poltrona);

  //limpa campo
  frm.inPoltrona.value = "";
  frm.inPoltrona.focus(); //joga o foco em inPoltrona
});

//botão confirmar reserva, quando o botão for clicado as reservas passam a ser exibidas como ocupadas
frm.btConfirmar.addEventListener("click", () => {
  if (reservadas.length == 0) {
    alert("Não há poltronas reservadas");
    frm.inPoltrona.focus();
    return;
  }
  const ocupadas = localStorage.getItem("teatroOcupado")
    ? localStorage.getItem("teatroOcupado").split(";")
    : [];

  //for decrescente, pois as reservas vão sendo removidas a cada alteração da imagem
  for (let i = reservadas.length - 1; i >= 0; i--) {
    ocupadas.push(reservadas[i]);

    //captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
    const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1];

    //modifica atributo da imagem
    imgPoltrona.src = "/cap11/img/Ocupada.jpg";

    //remove do vetor a reserva já alterada
    reservadas.pop();
  }

  localStorage.setItem("teatroOcupado", ocupadas.join(";"));
});
