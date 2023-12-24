const cardNum = document.querySelector('#card-num');
const cardName = document.querySelector('#card-name');
const cardMM = document.querySelector('#card-mm');
const cardYY = document.querySelector('#card-yy');
const cardCVV = document.querySelector('#card-cvv');

// verificacao

const inputName = document.querySelector('#inputName');
const inputNum = document.querySelector('#inputNum');
const inputMM = document.querySelector('#inputMM');
const inputYY = document.querySelector('#inputYY');
const inputCVV = document.querySelector('#inputCVV');

const btn = document.querySelector('#btnVerifi');
const errorV = document.querySelector('#errorVer');

btn.onclick = function verificacao() {
    if(inputName.value === "" || inputNum.value === "" || inputMM.value === "" || inputYY.value === "" || inputCVV.value === "") {
        errorV.classList.remove('errorV');
        errorV.classList.add('top-error');
        setTimeout(() => {
            errorV.classList.remove('top-error');
            errorV.classList.add('errorV');
        }, 3000);
    }
};

inputName.oninput = () => {
    cardName.innerText = inputName.value;
}

inputNum.oninput = () => {
    cardNum.innerText = inputNum.value;
}

inputYY.oninput = () => {
    cardYY.innerText = inputYY.value;
}

inputMM.oninput = () => {
    cardMM.innerText = inputMM.value;
}

inputCVV.oninput = () => {
    cardCVV.innerText = inputCVV.value;
}