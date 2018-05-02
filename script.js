let form = document.querySelector('.form');
let container = document.querySelector('.container');
let input = document.querySelector('.form__input');
let warning = document.querySelector('.form__warning');
let output = document.querySelector('.form__output');
let outputGroup = document.querySelector('.output-group');
let del = document.querySelector('.form__delete-entry');
input.oninput = () => {
  warning.style.display = 'none';
  input.value = input.value.replace(/</g, "&lt;");
}
form.onsubmit = () => {
  let email = /^[\w\.\-]+@[\w\-]+\.[a-z]+$/;
  if (input.value.search(email) == -1) {
    warning.style.display = 'flex';
  } else {
    output.innerHTML = input.value;
    input.value = '';
    let dupOutput = outputGroup.cloneNode(true);
    dupOutput.style.display = 'flex';
    outputGroup.parentNode.insertBefore(dupOutput, outputGroup.parentNode.children[1]);
  }
  return false;
}
del.onclick = () => {
    //container.removeChild(outputGroup);
  return false;
}