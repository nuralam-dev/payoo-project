document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumber = document.getElementById("input-number").value;
    const inputPin = document.getElementById("input-pin").value;
    if (inputNumber.length === 11) {
      if (inputPin === "1234") {
        window.location.href = "../html-index/main.html";
      } else {
        alert("input valid pin");
      }
    } else {
      alert("input valid number");
    }
  });
