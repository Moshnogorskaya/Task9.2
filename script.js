let form = document.querySelector('.form');
let input = document.querySelector('.form__input');
let warning = document.querySelector('.form__warning');
input.oninput=function(){
    warning.style.display='none';
}
form.onsubmit=function (){
  let email=/^[\w\.\-]+@[\w\-]+\.[a-z]+$/;
  if(input.value.search(email)==-1){
      warning.style.display='flex';}

      return false;
}

