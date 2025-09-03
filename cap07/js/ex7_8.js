//obtém elementos do form
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//discriminar as taxas cobradas
const TAXA_MULTA = 2 / 100; //multa por atraso 2%
const TAXA_JUROS = 0.33 / 100; //juros por atraso 0,33% por dia (abaixo será cobrado por dia)

//cria um ouvite para quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que o form seja enviado
  //obtem os dados (valores) dos campos do form.
  const dataVenc = frm.inDataVenc.value;
  const valor = Number(frm.inValor.value);
  const hoje = new Date(); //cria variaveis (instancia objetos)
  const vencto = new Date(); // data de vencimento

  //const ms = 86400000; //Valor de milissegundos = 24h * 60min * 60 seg * 1000 milissegundos

  const partes = dataVenc.split("-"); //data vem no formato aaaa-mm-dd
  vencto.setDate(Number(partes[2])); // dia
  vencto.setMonth(Number(partes[1]) - 1); // mês
  vencto.setFullYear(Number(partes[0])); // ano

  const atraso = hoje - vencto; //calcula a diferença de dias entra datas (em milissegundos)
  //inicia multa e juros com 0
  let multa = 0;
  let juros = 0;

  if (atraso > 0) {
    //se conta estiver em atraso
    const dias = atraso / 86400000; //converte ms do atraso em dias (1 dia = 24h x 60min x 60 seg x 1000 milisegundos: 86400000)
    multa = valor * TAXA_MULTA; //calcula multa
    juros = valor * TAXA_JUROS * dias; //calcula juros por dia de atraso
  }
  const total = valor + multa + juros; //calcula o total
  const diasAtraso = atraso / 86400000;
  //exibe os valores com 2 decimais nos campos do atributo readonly no html
  frm.outMulta.value = multa.toFixed(2);
  frm.outJuros.value = juros.toFixed(2);
  frm.outTotal.value = total.toFixed(2);

  resp.innerText = `${diasAtraso} dias de atraso`;
});
