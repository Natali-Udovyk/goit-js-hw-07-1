const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.body;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 
};
button.addEventListener('click', function() {
 const randomColor = getRandomHexColor();
  color.textContent = randomColor ;
  body.style.backgroundColor = randomColor;
})
