const nameInputField = document.querySelector('#name-input')
const nameOutputField = document.querySelector('#name-output')


nameInputField.addEventListener('input', () => {
  if(nameInputField.value){
    nameOutputField.textContent = nameInputField.value;
  } else {
    nameOutputField.textContent = "Anonymous";
  }  
})