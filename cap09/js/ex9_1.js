// obtém o elementos
const frm = document.querySelector("form");
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

//função trocarClube
const trocarClube = () => {
  let clube; // variavel que irá receber o nome do clube

  if (frm.rbBrasil.checked) {
    //varifica qual radiobutton (rb) esta selecionado
    clube = "Brasil";
  } else if (frm.rbPelotas.checked) {
    clube = "Pelotas";
  } else {
    clube = "Farroupilha";
  }
  // define as classes de dvTitulo: row e cores do clube
  dvTitulo.className = `row cores-${clube}`;

  //modifica a imagem de acordo com a seleção do cliente
  imClube.src = `img/${clube.toLowerCase()}.png`;
  imClube.className = `img-fluid`; //muda o estilo para exibir a imagem
  imClube.alt = `Símbolo do ${clube}`; //modifica atributo alt

  localStorage.setItem("clube", clube); //salva no navegador a escolha do cliente
};
//associa ao evento change de cada botão do form a função trocaClube
frm.rbBrasil.addEventListenner("change", trocarClube);
frm.rbPelotas.addEventListenner("change", trocarClube);
frm.rbFarroupilha.addEventListenner("change", trocarClube);

//verificar se o cliente selecionou um clube em sua visita anterior
const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    //se já estiver salvo algum clube
    const clube = localStorage.getItem("clube"); //obtém o nome do clube
    if (clube == "Brasil") {
      //conforme o clube, marca checked
      frm.rbBrasil.checked = true;
    } else if (clube == "Pelotas") {
      frm.rbPelotas.checked = true;
    } else {
      frm.rbFarroupilha.checked = true;
    }
    trocarClube(); //chama function que troca imagem e cores
  }
};
// ao carrega a página , verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);
