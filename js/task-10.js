
const creatBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl= document.querySelector('#boxes');

const amountEl = document.querySelector('#controls input')

function createBoxes(amount) {

  const boxSize = 30; 
  const sizeIncrement = 10; 

  const boxes = Array.from({ length: amount }).map((_, index) => {
    const box = document.createElement('div');
    box.style.width = box.style.height = `${boxSize + index * sizeIncrement}px`;
    box.style.backgroundColor = getRandomHexColor()

    return box;
  });

  boxesEl.append(...boxes);
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
