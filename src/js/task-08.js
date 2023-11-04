const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const formObject = readFormData(loginForm);
  if (validateForm(formObject)) {
    console.log(formObject);
    loginForm.reset(); // Очищаємо значення полів форми
  } else {
    alert("Усі поля повинні бути заповнені");
  }
})

function readFormData(form) {
  const formObject = {};
  new FormData(form).forEach((value, key) => {
    formObject[key] = value;
  });
  return formObject;
}

function validateForm(formObject) {
  for (const key in formObject) {
    console.log(key);
    if (formObject[key] === "") {
      return false;
    }
  }
  return true;
}


