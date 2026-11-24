
var total = 0;

function addExpense() {

    var name = document.getElementById("name").value;
    var amount = Number(document.getElementById("amount").value);
    var category = document.getElementById("category").value;

    if (name == "" || amount <= 0) {
        alert("Please enter valid details");
    }
    else {

        var list = document.getElementById("list");

        var div = document.createElement("div");

        div.innerHTML = name + " - Rs." + amount + " - " + category;

        var btn = document.createElement("button");

        btn.innerHTML = "Delete";

        btn.onclick = function() {
            list.removeChild(div);
            total = total - amount;
            document.getElementById("total").innerHTML = total;
        };

        div.appendChild(btn);
        list.appendChild(div);

        total = total + amount;

        document.getElementById("total").innerHTML = total;

        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
    }
}
