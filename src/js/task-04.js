let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

function updatecounterValue() {
    counterValueEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', function (){
    counterValue -= 1;
    updatecounterValue();
})

incrementBtn.addEventListener('click', function (){
    counterValue += 1;
    updatecounterValue();
})
