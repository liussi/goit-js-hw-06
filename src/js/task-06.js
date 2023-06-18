const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputChange);

function onInputChange(event){
    const dataLength = parseInt(inputEl.dataset.length);
    const valueEl = event.currentTarget.value.length;

if(valueEl === dataLength){
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid')
}else{
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid')
}
}