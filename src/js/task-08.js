const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit );

function onFormSubmit (event) {
event.preventDefault();

const mail = form.elements.email.value;
const password = form.elements.password.value;
if(mail === "" || password === ""){
   return alert('Всі поля повинні бути заповнені!');
}
