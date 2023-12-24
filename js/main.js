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
const register = document.querySelector('#register')
const mainContainer = document.querySelector('#mainContainer');

btn.onclick = function verificacao() {
    if(inputName.value === "" || inputNum.value === "" || inputMM.value === "" || inputYY.value === "" || inputCVV.value === "") {
        errorV.classList.remove('errorV');
        errorV.classList.add('top-error');
        setTimeout(() => {
            errorV.classList.remove('top-error');
            errorV.classList.add('errorV');
        }, 3000);
    }

    else {
        register.classList.remove('flex');
        register.classList.add('hidden');
        mainContainer.innerHTML = `
          <div class="flex flex-col items-center justify-center gap-8 max-sm:w-full">
            <div class="w-20 max-sm:w-32 flex justify-center text-center">
              <img class="w-full h-full" src="./images/icon-complete.svg" alt="">
            </div>
            <div class="text-2xl w-full max-sm:text-4xl text-center text-purple-700 flex flex-col gap-3">
              <p class="uppercase tracking-widest">OBRIGADO!</p>
              <p class="text-zinc-400 text-base max-sm:text-xl">Você adicionou um cartão</p>
            </div>
            <div class="flex w-full justify-center">
              <a href="" class="w-full text-center cursor-pointer max-sm:text-xl p-3 rounded-md text-zinc-100 bg-purple-800 hover:bg-purple-700 ease-in duration-150">Continuar</a>
            </div>
          </div>
        `
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