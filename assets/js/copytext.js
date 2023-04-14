const copyButton = document.querySelector(".copy-button");
const popup = document.querySelector(".popup-message"); // get popup message element

copyButton.addEventListener("click", function() {
  let input = document.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyButton.classList.add("active");
  popup.classList.add("active"); // show popup message
  window.getSelection().removeAllRanges();
  setTimeout(function(){
    copyButton.classList.remove("active");
    popup.classList.remove("active"); // hide popup message after 2.5 seconds
  },2500);
});