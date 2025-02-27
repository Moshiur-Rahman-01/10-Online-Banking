document.getElementById("add").addEventListener("click",
    function(event){
        event.preventDefault();
        const amount = getInputValueById("amount");
        const pin = getInputValueById("pin");
        const mainBalance = getInnerTextById("main-balance");

        if(amount && pin){
            if (pin === 1234) {
                const sum = mainBalance + amount;
                setInnerTextByIdAndValue("main-balance",sum);

                const container = document.getElementById("tran-history");
                const p = document.createElement("p");
                p.innerText = `
                    added ${amount} from ${pin} Pin
                `
                container.appendChild(p);
            }
            else {
                alert("pin thik koro");
            }
        }
        else{
            alert("Enter amount");
        }
    }
)