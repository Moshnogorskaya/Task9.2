const form = document.querySelector(".form");
const container = document.querySelector(".container");
const input = document.querySelector(".form__input");
const warning = document.querySelector(".form__warning");
const output = document.querySelector(".form__output");
const outputGroup = document.querySelector(".output-group");
const email = /^[\w\.\-]+@[\w\-]+\.[a-z]+$/;
input.oninput = () => {
  warning.style.display = "none";
  input.value = input.value.replace(/</g, "&lt;");
};
form.onsubmit = () => {
  if (input.value.search(email) == -1) {
    warning.style.display = "flex";
    return false;
  }
  output.innerHTML = input.value;
  input.value = "";
  const dupOutput = outputGroup.cloneNode(true);
  dupOutput.style.display = "flex";
  outputGroup.parentNode.insertBefore(
    dupOutput,
    outputGroup.parentNode.children[1]
  );
  const del = document.querySelector(".form__delete-entry");
  del.onclick = () => {
    container.removeChild(del.parentNode);
    return false;
  };
  return false;
};
