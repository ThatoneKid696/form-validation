function validateForm() {
    // Get the values of input boxes
    var username = document.querySelector(".user").value;
    var password = document.querySelector(".pass").value;
    
    // Get the error message elements
    var usernameError = document.querySelector(".userErr");
    var passwordError = document.querySelector(".passErr");
    
    // Hide error messages by default
    usernameError.style.display = "none";
    passwordError.style.display = "none";
    
    // Validate the username
    if (username.length == 0) {
        usernameError.style.display = "block";
        return false;
    }
    
    // Validate the password
    if (password.length < 8) {
        passwordError.style.display = "block";
        return false;
    }
}
