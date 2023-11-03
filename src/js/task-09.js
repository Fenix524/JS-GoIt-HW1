const bg = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorInfo = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColorBtnClick)


function onChangeColorBtnClick(){
  const newColor = getRandomHexColor();
  bg.style.backgroundColor = newColor;
  colorInfo.textContent = newColor 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
