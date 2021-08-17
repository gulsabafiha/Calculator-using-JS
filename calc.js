function getNumValue(num) {
    const getValue = document.getElementById(num);
    const getText = getValue.innerText;
    const getNum = parseInt(getText);
    return getNum;
}

function showValue(getNum) {
    const inputValue = document.getElementById('input');
    const inputNum = inputValue.value;
    inputValue.value =inputNum+ getNum;
}


document.getElementById('one').addEventListener('click', function () {
    const one = getNumValue('one');
    showValue(one);
})

document.getElementById('two').addEventListener('click', function () {
    const two = getNumValue('two');
    showValue(two);
})
document.getElementById('three').addEventListener('click', function () {
    const three = getNumValue('three');
    showValue(three);
})
document.getElementById('four').addEventListener('click', function () {
    const four = getNumValue('four');
    showValue(four);
})
document.getElementById('five').addEventListener('click', function () {
    const five= getNumValue('five');
    showValue(five);
})
document.getElementById('six').addEventListener('click', function () {
    const six= getNumValue('six');
    showValue(six);
})
document.getElementById('sev').addEventListener('click', function () {
    const sev = getNumValue('sev');
    showValue(sev);
})
document.getElementById('eight').addEventListener('click', function () {
    const eight = getNumValue('eight');
    showValue(eight);
})
document.getElementById('nine').addEventListener('click', function () {
    const nine = getNumValue('nine');
    showValue(nine);
})
document.getElementById('zero').addEventListener('click', function () {
    const zero = getNumValue('zero');
    showValue(zero);
})
document.getElementById('dblzero').addEventListener('click', function () {
    const dblzero = getNumValue('dblzero');
    showValue(dblzero);
})



function operation(param) {
    const getText = document.getElementById(param);
    const getValue = getText.innerText;
    return getValue
    
}
document.getElementById('dot').addEventListener('click', function () {
    const dot = operation('dot');
    showValue(dot);
})
document.getElementById('plus').addEventListener('click', function () {
    const plus= operation('plus');
    showValue(plus);
})
document.getElementById('minus').addEventListener('click', function () {
    const minus = operation('minus');
    showValue(minus);
})
document.getElementById('divide').addEventListener('click', function () {
    const divide = operation('divide');
    showValue(divide);
})
document.getElementById('multiply').addEventListener('click', function () {
    const multiply = operation('multiply');
    showValue(multiply);
})

//remove function
document.getElementById('c').addEventListener('click', function () {
    document.calc.txt.value = '';
})

//Main Calculation
function equal() {
    let val = document.calc.txt.value;
    if (val) {
        document.calc.txt.value=eval(val)
    }
}
document.getElementById('equal').addEventListener('click', function () {
    equal();
})