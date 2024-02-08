const conversorButton = document.querySelector(".convert-button")
const select1 = document.querySelector(".select1")
const select2 = document.querySelector(".select2")

function conversor() {
  const input = document.querySelector(".input-currency").value
  const valueOne = document.querySelector(".value-one")
  const valueConverted = document.querySelector(".value-cv")

  const dolarToday = 4.97;
  const euroToday = 5.36;
  const libraToday = 6.28;
  const bitcoinToday = 221000;

  if (select1.value == "brasil") {
    valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(input)
  }

  if (select1.value == "eua") {
    valueOne.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(input)
  }

  if (select1.value == "europa") {
    valueOne.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(input)
  }

  if (select1.value == "libra") {
    valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(input)
  }

  if (select1.value == "bitcoin") {
    valueOne.innerHTML = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "BTC"
    }).format(input)
  }


  // CONVERTENDO REAL PARA OUTRAS MOEDAS
  if (select2.value == "real") {
    valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(input)

  } else if (select2.value == "dolar") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(input / dolarToday)

  } else if (select2.value == "euro") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(input / euroToday);

  } else if (select2.value == "libra") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(input / libraToday);

  } else if (select2.value == "bitcoin") {
    valueConverted.innerHTML = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "BTC"
    }).format(input / bitcoinToday);
  }

  // CONVERTENDO DÓLAR PARA OUTRAS MOEDAS
  if (select1.value == "eua" && select2.value == "dolar") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(input)
  }

  if (select1.value == "eua" && select2.value == "real") {
    valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(input * dolarToday)
  }

  if (select1.value == "eua" && select2.value == "euro") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(input * 0.93)
  }

  if (select1.value == "eua" && select2.value == "libra") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
      style: "currency",
      currency: "GBP"
    }).format(input * 0.79)
  }

  if (select1.value == "eua" && select2.value == "bitcoin") {
    valueConverted.innerHTML = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "BTC"
    }).format(input * 0.000026)
  }

  // CONVERTENDO EURO PARA OUTRAS MOEDAS
  if (select1.value == "europa" && select2.value == "euro") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(input)
  }

  if (select1.value == "europa" && select2.value == "real") {
    valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(input * euroToday)
  }

  if (select1.value == "europa" && select2.value == "dolar") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(input * 1.08)
  }

  if (select1.value == "europa" && select2.value == "libra") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
      style: "currency",
      currency: "GBP"
    }).format(input * 0.85)
  }

  if (select1.value == "europa" && select2.value == "bitcoin") {
    valueConverted.innerHTML = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "BTC"
    }).format(input * 0.000024)
  }

  // CONVERTENDO LIBRA PARA OUTRAS MOEDAS

  if (select1.value == "libra" && select2.value == "libra") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
      style: "currency",
      currency: "GBP"
    }).format(input)
  }

  if (select1.value == "libra" && select2.value == "real") {
    valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(input * libraToday)
  }

  if (select1.value == "libra" && select2.value == "dolar") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(input * 1.26)
  }

  if (select1.value == "libra" && select2.value == "euro") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(input * 1.17)
  }

  if (select1.value == "libra" && select2.value == "bitcoin") {
    valueConverted.innerHTML = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "BTC"
    }).format(input * 0.000028)
  }

  // CONVERTENDO BITCOIN PARA OUTRAS MOEDAS 

  if (select1.value == "bitcoin" && select2.value == "bitcoin") {
    valueConverted.innerHTML = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "BTC"
    }).format(input)
  }

  if (select1.value == "bitcoin" && select2.value == "real") {
    valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(input * bitcoinToday)
  }

  if (select1.value == "bitcoin" && select2.value == "dolar") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(input * 45431.70)
  }

  if (select1.value == "bitcoin" && select2.value == "euro") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(input * 42151.30)
  }

  if (select1.value == "bitcoin" && select2.value == "libra") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
      style: "currency",
      currency: "GBP"
    }).format(input * 36002.35)
  }

}

function changeTop() {
  const currencyName = document.getElementById("currency-name1")
  const flagOne = document.querySelector(".flag-one")
  const textPlace = document.querySelector("#text-placeholder")

  // Para trocar o texto e a imagem da primeira legenda

  if (select1.value == "brasil") {
    currencyName.innerHTML = "Real"
    flagOne.src = "./assets/brasil-img.png"
    textPlace.setAttribute("placeholder", "R$ 1.000");

  } else if (select1.value == "eua") {
    currencyName.innerHTML = "Dólar"
    flagOne.src = "./assets/eua-img.png"
    textPlace.setAttribute("placeholder", "US$ 1.000");

  } else if (select1.value == "europa") {
    currencyName.innerHTML = "Euro"
    flagOne.src = "./assets/euro.png"
    textPlace.setAttribute("placeholder", "1.000 €")

  } else if (select1.value == "libra") {
    currencyName.innerHTML = "Libra"
    flagOne.src = "./assets/libra-img.png"
    textPlace.setAttribute("placeholder", "£ 1.000")

  } else if (select1.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    flagOne.src = "./assets/bitcoin-img.png"
    textPlace.setAttribute("placeholder", "BTC 1.000")
  }
  conversor()
}

// Para trocar o texto e a imagem da segunda legenda
function change() {
  const currencyName2 = document.getElementById("currency-name2")
  const flagTwo = document.querySelector(".flag-img")

  if (select2.value == "real") {
    currencyName2.innerHTML = "Real"
    flagTwo.src = "./assets/brasil-img.png"
  } else if (select2.value == "dolar") {
    currencyName2.innerHTML = "Dólar"
    flagTwo.src = "./assets/eua-img.png"
  } else if (select2.value == "euro") {
    currencyName2.innerHTML = "Euro"
    flagTwo.src = "./assets/euro.png"
  } else if (select2.value == "libra") {
    currencyName2.innerHTML = "Libra"
    flagTwo.src = "./assets/libra-img.png"
  } else if (select2.value == "bitcoin") {
    currencyName2.innerHTML = "Bitcoin"
    flagTwo.src = "./assets/bitcoin-img.png"
  }
  conversor()
}

select1.addEventListener("change", changeTop)
select2.addEventListener("change", change)
conversorButton.addEventListener("click", conversor)
