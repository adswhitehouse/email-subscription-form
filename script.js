let emailInput = document.querySelector(".jsEmailInput");
let message = document.querySelector(".jsMessage");

const scriptURL =
  "https://script.google.com/macros/s/AKfycby6BEDcVeeZJXvAS4eu1R3R6_MPrFOO7NEVSICSjzfmSyYN62cmNAx-cKhGuR6ep4MM/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      message.textContent = "Thank You For Your Submission";
      form.reset();
      setTimeout(() => {
        message.textContent = "";
      }, 5000);
    })
    .catch((error) => console.error("Error!", error.message));
});
