const itemName = document.getElementById("item-name");
const Quantity = document.getElementById("quantity");
const Price = document.getElementById("price");
const addItem = document.getElementById("item-add");
const tBody = document.getElementById("table-body");

let html = "";

addItem.addEventListener("click", () => {
    if (itemName.value != "" && Price.value != "") {
        html += `<tr>`
        html += `<td> ${itemName.value} </td> <td> ${Quantity.value} </td> <td> ${Price.value} </td> <td> ${Price.value * Quantity.value} </td>`
        html += `</tr>`
        tBody.innerHTML = html;
        itemName.value = "";
        Quantity.value = 1;
        Price.value = "";
    }
    else {
        alert("Enter Item & It's Name");
    }
});

document.getElementById("print-btn").addEventListener("click", () => {
    print();
});