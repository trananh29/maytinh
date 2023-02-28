let view = document.getElementById("number");
function inputValue(value) {
    view.value += value;
}
function bang() {
    let result = eval(view.value);
    view.value = result;
}
function del() {
    view.value="";
}