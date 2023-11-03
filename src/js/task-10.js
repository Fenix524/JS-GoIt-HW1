const buttonBox = document.querySelector('#boxes');

const objQuantityInput = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');

createBtn.addEventListener('click', onCreateBtnClick)
destroyBtn.addEventListener('click', onDestroyBtnClick)

console.log(createBtn, destroyBtn);
function onCreateBtnClick(){
  let startBtnSize = 30;

  const btnResultList = [];
  for (let i = 0; i < objQuantityInput.value; i++) {
    const btn = document.createElement("button");
    btn.style.height = startBtnSize + "px";
    btn.style.width = startBtnSize + "px";
    btn.style.backgroundColor = getRandomHexColor();

    btnResultList.push(btn);    
    startBtnSize = startBtnSize + 10;
  }

  buttonBox.append(...btnResultList)
}
function onDestroyBtnClick(){
  buttonBox.innerHTML = '';
}

function getRandomHexColor(){
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
