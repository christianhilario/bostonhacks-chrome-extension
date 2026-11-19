// Step 1: wait until the HTML has loaded
document.addEventListener("DOMContentLoaded", () => {

  // Step 2: grab the elements from index.html by their id
  const amountInput = document.getElementById("amount");
  const currencySelect = document.getElementById("currency");
  const convertBtn = document.getElementById("convert");
  const resultDiv = document.getElementById("result");

  // Step 3: the base URL. We add the currency code on the end later
  const apiURL = "https://api.frankfurter.dev/v2/rate/usd/";

  // Step 4: read and check the input when the button is clicked
  convertBtn.addEventListener("click", async () => {
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;

    // Error check #1: empty box, 0 or a negative number
    if (isNaN(amount) || amount <= 0) {
      resultDiv.textContent = "Enter an amount greater than 0.";
      return;
    }

    resultDiv.textContent = "Converting...";
    const url = apiURL + currency;

    // Step 5: fetch, convert, display
    try {
      const response = await fetch(url);

      // Error check #2: the API sent back an error
      if (!response.ok) {
        throw new Error("API error: " + response.status);
      }

      const data = await response.json();

      // Error check #3: the reply has no rate in it
      if (!data.rate) throw new Error("No rate in response");

      const converted = (amount * data.rate).toFixed(2);
      resultDiv.textContent =
        `${amount} USD = ${converted} ${currency.toUpperCase()}`;
    } catch (error) {
      // The user sees a friendly message; the real reason goes to the console
      console.error(error);
      resultDiv.textContent = "Couldn't get the rate. Try again.";
    }
  }); // closes the click listener
}); // closes DOMContentLoaded
