const nameEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

nameEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    const valueEl = event.currentTarget.value;

    if(valueEl === ''){
        spanEl.textContent = 'Anonymous';
    }else {
        spanEl.textContent = event.currentTarget.value;
     }
}