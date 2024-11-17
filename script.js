let inputbox = document.getElementById("disBox");
let buttons = document.querySelectorAll("button");

let string = "";

// Function to update the display
function updateDisplay(value) {
    inputbox.value = value;
}

// Function to clear the display
function clearDisplay() {
    string = "";
    updateDisplay(string);
}

// Function to delete the last character
function deleteLastCharacter() {
    string = string.slice(0, -1);
    updateDisplay(string);
}

// Function to toggle plus/minus
function togglePlusMinus() {
    if (string) {
        string = String(-eval(string));
        updateDisplay(string);
    }
}

// Function to evaluate the expression
function calculate() {
    try {
        string = String(eval(string));
        updateDisplay(string);
    } catch (error) {
        updateDisplay("Error");
    }
}

// Function to handle button clicks for numbers and operators
function appendCharacter(char) {
    string += char;
    updateDisplay(string);
}

// Event listeners for all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const btnText = button.innerText;

        switch (btnText) {
            case "AC":
                clearDisplay();
                break;
            case "DEL":
                deleteLastCharacter();
                break;
            case "=":
                calculate();
                break;
            case "±":
                togglePlusMinus();
                break;
            default:
                appendCharacter(btnText);
                break;
        }
    });
});



