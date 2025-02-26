// login button
document.getElementById("login-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        const pin = document.getElementById("pin").value;
        if(accountNumber.length === 11){
            if(pin === "7010"){
                window.location.href = "main.html";
            }
            else{
                alert("PiN thik kore de mdrcd");
            }
        }
        else{
            alert("Formal: Need a valid account number \nMy honest reaction -> khanki magi...");
        }
    }
)