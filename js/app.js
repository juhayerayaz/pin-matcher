// pin generator
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin (){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// calculator 

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcIpnut = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number =='C'){
            calcIpnut.value = '';
        }
        else if (number == 'Del'){
            calcIpnut.value = calcIpnut.value.toString().slice(0, -1);
        }
    }
    else{
    const previousNumber = calcIpnut.value;
    const newNumber = previousNumber + number;
    calcIpnut.value = newNumber;
    }
})

// pin matcher 

function verifyPin (){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;

        const successMessage = document.getElementById('notify-success');
        const failError = document.getElementById('notify-fail');
    if(pin == typedNumber){
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}