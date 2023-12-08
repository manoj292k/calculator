
function update(value) {
    document.getElementById('display').value += value;
    console.log("added")
}
function backspace() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
    console.log("backspace");
}

function clearDisplay(){
        document.getElementById('display').value = '';
        console.log("clear")
    }

    function calculate() {
        try {
            document.getElementById('display').value = eval(document.getElementById('display').value);
            console.log("success")
        } catch (error) {
            document.getElementById('output').value = 'Error';
        }
    }