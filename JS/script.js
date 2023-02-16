{
    const calculateResult = (formCurrencyValue, amount) => {
        switch (formCurrencyValue) {
            case "EUR":
                return amount / 4.69;
            case "USD":
                return amount / 4.30;
            case "GBP":
                return amount / 5.25;
        }
    }

    const updateResult = (result, formCurrencyValue) => {
        const resultText = document.querySelector(".js-result");
        resultText.innerText = `Otrzymasz: ${(result.toFixed(2))} ${formCurrencyValue}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const formCurrency = document.querySelector(".js-currency");
        const formQuantity = document.querySelector(".js-quantity");
        const formCurrencyValue = formCurrency.value;
        const amount = +formQuantity.value; 
        const result = calculateResult(formCurrencyValue, amount);
        updateResult(result, formCurrencyValue);


    }
    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    }

    init();
}
