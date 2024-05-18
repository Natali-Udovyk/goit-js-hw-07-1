const form = document.querySelector('.login-form');
const userForm = {};
form.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if(email === '' || password === ''){
        return alert('All form fields must be filled in')
    } else {
        userForm.email = email,
        userForm.password = password
        console.log(userForm);
        form.reset();
    }
    
})
