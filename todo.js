const form = document.getElementById ('add-form');
const list = document.getElementById ('list');
const listItem = document.querySelectorAll('li');

for(let item of listItem){
    const close = document.createElement ('span');
        close.className = "close";
        close.innerText = "x";
        item.appendChild(close);
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const inputText = document.getElementById ('add-input');
    if (inputText.value === "") {
        alert ('Ошибка');
    } else{
        let newLi = document.createElement ("li");
        newLi.textContent= inputText.value;
        list.appendChild(newLi);
        const close = document.createElement ('span');
        close.className = "close";
        close.innerText = "x";
        newLi.appendChild(close);
    }
});