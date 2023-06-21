
const creatBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl= document.querySelector('#boxes');
const amountEl = document.querySelector('#controls input')


function createBoxes(amount) {

  for(let i = 0; i < amount; i+= 1) {
    let elem = document.createElement('div');
    
    elem.style.width = 30 + (10 * i)+'px';
    elem.style.height = 30 + (10 * i)+'px';
    elem.style.backgroundColor = getRandomHexColor();
    boxesEl.append(elem);

  }

}
creatBtn.addEventListener('click', getAmount);

 function getAmount() {
  let amount = amountEl.value;
  if(amount > 0) {
    createBoxes(amount);
  }
};
destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = '';
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
