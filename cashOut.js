document.getElementById("out").addEventListener("click",
    function (event) {
        event.preventDefault();
        const amount = getInputValueById("amount-out");
        const pin = getInputValueById("pin-out");
        const mainBalance = getInnerTextById("main-balance");

        if (amount && pin) {
            if (pin === 1234) {
                const sub = mainBalance - amount;
                setInnerTextByIdAndValue("main-balance", sub);

                const container = document.getElementById("tran-history");
                const p = document.createElement("p");
                p.innerText = `
                    cashout ${amount} from ${pin} Pin
                `
                container.appendChild(p);
            }
            else {
                alert("pin thik koro");
            }
        }
        else {
            alert("Enter amount");
        }
    }
)