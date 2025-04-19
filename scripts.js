function formSubmit () {
    if (!validateForm()) {
        return;
    }
    alert("Your message has been sent successfully!");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    } else if (!isValidEmail(email)) {
       alert("Invalid email format");
       return false;
    }
    return true;
  }
  
  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function simulateSubmit() {
    document.getElementById('send-button').click();
  }

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    // Toggle the visibility of the menu
    navLinks.classList.toggle("active");
  });
});