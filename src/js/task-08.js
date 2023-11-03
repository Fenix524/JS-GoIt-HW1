const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const {email, password} = readForm(event);
  console.log(email.value, password.value);
  formClear(event.currentTarget);
})

function readForm(event) {
  return event.currentTarget.elements;
}

function formClear(form) {
  for (const element of form.elements) {
    if (["text","password","email","textarea"].includes(element.type)) {
      element.value = "";
      console.log(`Очищено обєкт: ${element.name}`);
    }
  }
}