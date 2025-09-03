//obtém elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria ouvite para quando o botão form for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //impede a página de recarregar
  //obtém valores dos campos do form
  const senha = frm.inSenha.value; //obtém valor do campo senha
  const erro = []; //cria um array para armazenar erros

  //verificar tamanho da senha é invalida
  if (senha.length < 8 || senha.length > 12) {
    erro.push("ter entre 8 e 12 caracteres");
  }
  //verifcar se não possui numeros
  if (senha.match(/[0-9]/g) == null) {
    //pode usar !senha.match(/[0-9]/g) com ! (false), sem o == null
    erro.push("possuir números (no mínimo, 1)");
  }
  //verificar se não possui letras minusculas
  if (senha.match(/[a-z]/g) == null) {
    //pode usar !senha.match(/[a-z]/g) com ! (false), sem o == null
    erro.push("possuir letras minúsculas (no mínimo, 1)");
  }
  //verificar se não possui letras maiusculas
  if (senha.match(/[A-Z]/g) == null || senha.match(/[A-Z]/g).length == 1) {
    //pode usar !senha.match(/[A-Z]/g) com ! (false), sem o == null
    erro.push("possuir letras maiusculas (no mínimo, 2)");
  }
  //verificar se não possui caracteres especiais
  if (senha.match(/[\w|_]/g) == null) {
    //pode usar !senha.match(/[\w|_]/g) com ! (false), sem o == null
    erro.push("possuir caracteres especiais (no mínimo, 1)");
  }
  //se vetor esta vazio (significa que não froam encontrados erros)
  if (erro.length == 0) {
    resp.innerText = "OK! Senha Valida";
  } else {
    resp.innerText = `ERRO!... A Senha deve ${erro.join(", ")}`;
  }
});
