
const display = document.getElementById('display');

const buttons = document.querySelectorAll('.buttons button');

let currentValue = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        switch (buttonText) {
            case '=':
                try {
                    currentValue = eval(currentValue);
                    display.value = currentValue;
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            case 'AC':
                display.value = '';
                currentValue = '';
                break;
            case 'del':
                currentValue = currentValue.slice(0, -1);
                display.value = currentValue;
                break;
            case '^2':
                currentValue = Math.pow(parseFloat(currentValue), 2);
                display.value = currentValue;
                break;
            default:
                currentValue += buttonText;
                display.value = currentValue;
        }
    });
});