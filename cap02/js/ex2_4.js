//cria referência ao form e ao elemento h3 (onde será exibido a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvite" que ser iniciado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo/1000)*consumo //calcula o valor do quilo a ser pago
    resp.innerText = `Valor a Pagar R$: ${valor.toFixed(2)}` //exibe a resposta

    e.preventDefault () //evita o envio do form.
})