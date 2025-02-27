// input er value
function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// tag er content
function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// new kichu set korar jonne..
function setInnerTextByIdAndValue(id,value){
    document.getElementById(id).innerText = value;
}

// toggle korar jonne...
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}