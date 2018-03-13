$(document).ready(function() {

  // Create Example User In localStorage
  mockData()

  $('form').on('submit', function(event) {

      // Prevents the default action of the button (In this case prevents the form from submitting)
      event.preventDefault()

      // Retrieves the value from the username and password textfields
      var username = $('#username').val()
      var password = $('#password').val()

      // Checks the value returned from the Validate Login
      if(validateLogin(username, password)) {
        window.location = "browse.html"
      } else {
        // If there is an old error message remove it
        $(".error").remove()

        // Add the new error message
        $('form').append("<div class=\"error\">Error: Password Incorrect</div>")
      }
    })

    function mockData() {
      localStorage.setItem("username", "user1");
      localStorage.setItem("password", "password");
    }

    function validateLogin(username, password) {
      // Load the stored username and password from the database
      let storedUsername = localStorage.getItem("username");
      let storedPassword = localStorage.getItem("password");
      console.log(storedUsername, storedPassword)
      console.log(username, password)
      // Check the entered username and password match what is in the database
      if(username === storedUsername && password === storedPassword){
        return true;
      } else {
        return false;
      }
    }
})
