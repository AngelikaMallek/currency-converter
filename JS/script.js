let formCurrency = document.querySelector(".js-currency");
let formQuantity = document.querySelector(".js-quantity");
let form = document.querySelector(".js-form");
let result = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formCurrencyValue = formCurrency.value;
    let amount = +formQuantity.value;
    let rate;

    switch (formCurrencyValue) {
        case "EUR":
            rate = 4.69;
            break;
        case "USD":
            rate = 4.30;
            break;
        case "GBP":
            rate = 5.25;
            break;
    }
    result.innerText = `Otrzymasz: ${(amount / rate).toFixed(2)} ${formCurrency.value}`;
})