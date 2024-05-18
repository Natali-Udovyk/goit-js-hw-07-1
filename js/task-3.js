const nameInput = document.querySelector('#name-input');
const nameOutPut = document.querySelector('#name-output')
nameInput.addEventListener('input', () => {
   
    const inputValue = nameInput.value.trim();
    if(inputValue === '') {
        nameOutPut.textContent = 'Anonymous';

    } else {
        nameOutPut.textContent = inputValue;
    }
});