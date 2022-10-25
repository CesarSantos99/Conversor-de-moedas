const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.31
const euro = 5.25
const bitcoin = 098

const convertValue = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReal) 

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReal / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal / euro)
    }

    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
        }).format(inputReal / bitcoin )
    }
}

currencyChange = () => {
    const sectionParagrafoUm = document.getElementById('section-paragrafo-um')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        sectionParagrafoUm.innerHTML = 'Dólar Americano'
        currencyImg.src = "img/estados-unidos (1) 1.png"
    }

    if (select.value === '€ Euro') {
        sectionParagrafoUm.innerHTML = 'Euro'
        currencyImg.src = "img/Design sem nome 1.png"
    }

    if (select.value === 'Bitcoin') {
        sectionParagrafoUm.innerHTML = 'Bitcoin'
        currencyImg.src = "img/Design sem nome (1) 1.png"
    }
    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', currencyChange)