    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    function subscribe() {
      const emailField = document.getElementById("userInput");
      const email = emailField.value.trim();

      if (!email) {
        alert("Please enter an email first.");
        return;
      }

      if (!isValidEmail(email)) {
        alert("This doesn't look like a valid email.");
        return;
      }

      alert("Your email has been saved!");
      emailField.value = ""; 
    }