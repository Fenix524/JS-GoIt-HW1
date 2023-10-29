const str = "123131";

function checkString(str) {
  for (const el of str.split("")) {
    if (isNaN(parseInt(el))) {
      return false;
    }
  }
  return true;
}

if (checkString(str)) {
  console.log("рядок лише з цифр");
} else {
  console.log("рядок не лише з цифр");
}

