let todoArray = ["En az", "lorem"];
let getbtnDOM = document.querySelector("#button-addon2");
let inputDOM = document.querySelector("#addInput");
let listInput = document.querySelector("#listGroup");

getbtnDOM.addEventListener("click", function () {
    if (inputDOM.value.trim()) { // Boşlukları kontrol edelim
        let newItemValue = inputDOM.value.trim();
        todoArray.push(newItemValue);
        addItemToDOM(newItemValue);
        inputDOM.value = ""; // Input'u temizle
        writeToConsole();
    } else {
        console.log("Değer girmediniz.");
    }
});

function addItemToDOM(item) {
    let newItem = document.createElement("li");
    newItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    newItem.textContent = item;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("btn", "btn-outline-danger", "btn-sm");

    deleteBtn.addEventListener("click", function () {
        newItem.remove();
    });

    newItem.appendChild(deleteBtn);
    listInput.appendChild(newItem);
}


function writeToConsole() {
    console.log("Güncellenmiş Liste:");
    console.log(todoArray);
}

//<button class="btn btn-outline-secondary" type="button" id="deleteTodo">X</button>