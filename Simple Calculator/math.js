function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate () {
    const display = document.getElementById("display");

    try {
        display.value = new Function ('return ' + display.value)();
    }
    catch {
        display.value = "error";
    }
}