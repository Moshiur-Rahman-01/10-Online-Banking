document.getElementById("add").addEventListener("click",
    function(event){
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        const amount = getInputValueById("amount");
        const pin = getInputValueById("pin");
        const mainBalance = getInnerTextById("main-balance");

        const selectBank = document.getElementById("all-bank").value;


        if(amount<0){
            alert("plz amar shathe fajlami koiro naa..");
            return;
        }
        if(amount && pin){
            if (pin === 1234) {
                const sum = mainBalance + amount;
                setInnerTextByIdAndValue("main-balance",sum);

                const container = document.getElementById("tran-history");
                const div = document.createElement("div");
                div.classList.add("bg-red-400")
                div.innerHTML = `
                    <h1 class="text-yellow-300"> Added Money from ${selectBank} </h1>
                    <h3> ${amount} </h3>
                    <p>Account number: ${accountNumber}</p>
                `
                container.appendChild(div);
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