const submitButton = document.querySelector("button");
const form = document.querySelector("form");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const inputGroups = form.querySelectorAll(".input-group");

  for (const inputGroup of inputGroups) {
    const input = inputGroup.querySelector("input");
    const error = inputGroup.querySelector(".error-icon");
    const errorMessage = inputGroup.querySelector(".error-message");

    if (!input.value) {
      error.style.display = "block";
      errorMessage.style.display = "block";
    } else if (input.id === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailPattern.test(input.value);
      if (!isEmailValid) {
        error.style.display = "block";
        errorMessage.style.display = "block";
      } else {
        error.style.display = "none";
        errorMessage.style.display = "none";
      }
    } else {
      error.style.display = "none";
      errorMessage.style.display = "none";
    }
  }
});
