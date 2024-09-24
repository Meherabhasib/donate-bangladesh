function getInputFieldValueById(Id){
    const inputValue = document.getElementById(Id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}

function getTextFieldValueById(Id){
    const textValue =document.getElementById(Id).innerText;
    const textnumber = parseFloat(textValue)
    return textnumber;
}

function openModal() {
    const modal = document.getElementById("congrats-modal");
    modal.style.display = 'block';
    modal.style.display = 'blur'
}

function closeModal() {
    const modal = document.getElementById("congrats-modal");
    modal.style.display = "none";
}