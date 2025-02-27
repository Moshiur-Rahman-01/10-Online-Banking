document.getElementById("cash-out").style.display = "none";
document.getElementById("tran-history").style.display = "none";

document.getElementById("toggle-add").addEventListener("click",
    function(){
        handleToggle("add-money","block");
        handleToggle("cash-out","none");
        handleToggle("tran-history", "none");

    }
)

document.getElementById("toggle-out").addEventListener("click",
    function () {
        handleToggle("add-money", "none");
        handleToggle("cash-out", "block");
        handleToggle("tran-history", "none");

    }
)

document.getElementById("transection-box").addEventListener("click",
    function () {
        handleToggle("tran-history", "block");
        handleToggle("add-money", "none");
        handleToggle("cash-out", "none");
    }
)


