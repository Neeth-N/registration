const scriptURL = 'https://script.google.com/macros/s/AKfycbyvKwbnTuSfooGynsxh9N7-XogJl_PHI8O5Er4mIVf8O8GgkeleyJvyYYhyw9wO29YwRg/exec'
const form = document.forms['regisform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(() => {  window.location.href = "submitted.html"; })
    .catch(error => console.error('Error!', error.message))
})

const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");
const inputField = document.getElementById("inputField");


btn.onclick = () => {
  if (inputField.value.trim() !== "") {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
};
