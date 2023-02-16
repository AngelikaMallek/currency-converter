let formCurrency = document.querySelector(".js-currency");
let formQuantity = document.querySelector(".js-quantity");
let form = document.querySelector(".js-form");
let result = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formCurrencyValue = formCurrency.value;

    switch (formCurrencyValue) {
        case "EUR":
            formCurrencyValue = 4.69;
            break;
        case "USD":
            formCurrencyValue = 4.30;
            break;
        case "GBP":
            formCurrencyValue = 5.25;
            break;
    }
    result.innerText = `Otrzymasz: ${(+formQuantity.value / formCurrencyValue).toFixed(2)} ${formCurrency.value}`;
})