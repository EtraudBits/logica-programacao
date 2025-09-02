//cria referencia ao form e o elemento h3
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvite" acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    //obtém conteúdo dos campos
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const bloco = Math.ceil(tempo / 15)
    const pagar = valor*bloco

    resp.innerText = `Valor a Pagar R$ ${pagar.toFixed(2)}`

    e.preventDefault()
})