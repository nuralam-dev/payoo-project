document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );
    const amount = parseFloat(document.getElementById("cash-out-amount").value);
    const pin = parseInt(document.getElementById("cash-out-pin").value);

    if (pin === 1234) {
      const sum = mainBalance - amount;
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("input valid pin");
    }
  });
