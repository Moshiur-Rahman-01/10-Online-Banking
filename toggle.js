document.getElementById("cash-out").style.display = "none";

document.getElementById("toggle-add").addEventListener("click",
    function(){
        document.getElementById("add-money").style.display = "block";
        document.getElementById("cash-out").style.display = "none";
    }
)

document.getElementById("toggle-out").addEventListener("click",
    function () {
        document.getElementById("add-money").style.display = "none";
        document.getElementById("cash-out").style.display = "block";
    }
)