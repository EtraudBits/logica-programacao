//cria referência ao form, onde será exibo as respostas
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//cria um "ouvite" acionado quando aperta o botão submit
frm.addEventListener("submit", (e) => {
    //obtem o conteudo dos campos
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    //calcula o valor da promoção
    const promocao = Math.floor(preco * 2)

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`

    e.preventDefault()
})