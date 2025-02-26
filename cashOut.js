document.getElementById("out").addEventListener("click",
    function (event) {
        event.preventDefault();
        const amount = document.getElementById("amount-out").value;
        const convertedAmount = parseFloat(amount);

        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById("main-balance").innerText;
        const cMB = parseFloat(mainBalance);

        if (amount && pin) {
            if (convertedPin === 7010) {
                const sub = cMB - convertedAmount;
                document.getElementById("main-balance").innerText = sub;
            }
            else {
                alert("chudir vai");
            }
        }
        else {
            alert("Enter amount");
        }
    }
)