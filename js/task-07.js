const inpuEl = document.querySelector('input#font-size-control');
const sizeEl = document.querySelector('span#text');
console.log(sizeEl);
inpuEl.addEventListener('input', onInputSizeChange);

function onInputSizeChange () {
const fontSize = inpuEl.value;

sizeEl.style.fontSize = `${fontSize}px`;
}