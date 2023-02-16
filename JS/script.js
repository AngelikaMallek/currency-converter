{
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formCurrency = document.querySelector(".js-currency");
        const formQuantity = document.querySelector(".js-quantity");
        const result = document.querySelector(".js-result");

        const formCurrencyValue = formCurrency.value;
        const amount = +formQuantity.value;
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
}