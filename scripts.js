// Cotação de moedas
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

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
  console.log(amount, price, symbol)
}