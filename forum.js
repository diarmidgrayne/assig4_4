document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var nameError = document.getElementById("name-error");

  var namePattern = /^[A-Z].*[A-Za-z]$/;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phonePattern = /^\d{1,12}$/;

  var valid = true;

  if (!namePattern.test(nameInput.value)) {
    nameError.innerText = "Please enter a valid name.";
    valid = false;
  } else {
    nameError.innerText = "";
  }

  if (!emailPattern.test(emailInput.value)) {
    emailInput.setCustomValidity("Please enter a valid email address.");
    valid = false;
  } else {
    emailInput.setCustomValidity("");
  }

  if (!phonePattern.test(phoneInput.value)) {
    phoneInput.setCustomValidity("Please enter a valid phone number with up to 12 digits.");
    valid = false;
  } else {
    phoneInput.setCustomValidity("");
  }

  if (valid) {
    // If all inputs are valid, proceed with form submission
    this.submit();
  }
});
