const inputInfo = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const container = document.querySelector('#boxes');
const destroy = document.querySelector('button[data-destroy]');

create.addEventListener('click', function() {
  const inputValue = inputInfo.value;
  createBoxes(Number(inputValue));
});

function createBoxes(amount) {
  container.innerHTML = ''; 

  let width = 30;
  let height = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesHTML += `<div style="background-color: ${color}; width: ${width}px; height: ${height}px; margin: 5px;"></div>`;

    width += 10;
    height += 10;
  }
  container.insertAdjacentHTML('beforeend', boxesHTML);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
destroy.addEventListener('click', function(){
  container.innerHTML = '';
  inputInfo.value = ''
})


inputInfo.style.fontSize = '24px';
inputInfo.style.padding = '10px';
inputInfo.style.width = '250px';
inputInfo.style.border = '1px solid black';
inputInfo.style.borderRadius = '10px';
create.style.width = '200px';
create.style.fontSize = '24px';
destroy.style.fontSize = '24px';
destroy.style.backgroundColor = 'red';
create.style.backgroundColor = 'blue';
create.style.height = '50px';
destroy.style.color = 'white';
create.style.color = 'white';
destroy.style.height = '50px';
destroy.style.width = '200px';
destroy.style.borderRadius = '10px';
create.style.borderRadius = '10px';
