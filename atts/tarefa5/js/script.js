var prods = [{
    id: 1,
    name: "Bife com batatas"
},
{
    id: 2,
    name: "Coxa de frango crocante"
},
{
    id: 3,
    name: "Carne de panela"
},
{
    id: 4,
    name: "Farofa"
},
{
    id: 5,
    name: "Salada"
},
{
    id: 6,
    name: "Torresmo"
},
];

var thePrices = [30, 25, 22, 10, 8, 12]

function start() {
saida.innerHTML = '';

var customer_name, customer_phone, customer_email;

customer_name = document.getElementById('name').value
customer_phone = document.getElementById('phone').value
customer_email = document.getElementById('email').value

if (customer_name == "" || customer_phone == "" || customer_email == "") {
    document.getElementById("calculate").innerHTML = "Por favor, insira todos os dados para continuar."
    setTimeout(() => {
        document.getElementById("calculate").innerHTML = "Calcular";
    }, 1500);

} else {
    saida.innerHTML += "Caro <b>" + customer_name + "</b><br><br> Seguem os dados do seu pedido. <br><br> O seu pedido é: <br><br>"
    var finalPrice = 0,
        quantSum = 0;

    for (i = 0; i < 6; i++) {
        quant = document.getElementById(i + 1).value

        if (quant != 0) {
            var totalPrice = thePrices[i] * quant
            finalPrice += totalPrice;
            quantSum += quant

            saida.innerHTML += "<li>Prato: " + prods[i].name + " - Preço unitário: R$ " + thePrices[i] + ",00 - Quantidade: " + quant + " - Total: R$ " + totalPrice + ",00";
        }
    }
    $('html,body').animate({
        scrollTop: document.body.scrollHeight
    }, "slow");
    
    if (quantSum == 0) {
        document.getElementById("calculate").innerHTML = "Atenção, pedido vazio."
        setTimeout(() => {
            document.getElementById("calculate").innerHTML = "Calcular";
        }, 1500);
    }
    saida.innerHTML += "<br><br><b>Preço final R$ " + finalPrice + ",00<b>";
}
}