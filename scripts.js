// Cotação de moedas
const USD = 5.64
const EUR = 6.22
const GBP = 7.38

// Obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Captando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Atualizando o conteúdo dinamicamente
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total
    let total = amount * price

    // Verifica se o resultado não é um número
    if (isNaN(total)) {
      return alert("Por favor, digite um valor válido")
    }

    // Formatar o valor total
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado total
    result.textContent = total + " Reais"
    
    // Aplica a classe que exibe o footer
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    // Remove a classe que exibe o footer
    footer.classList.remove("show-result")
    alert("Não foi possível converter")
  }
}

// Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  // Converte o value para Number para utilizar o toLocaleString para formatar no padrão BRL
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}