$(document).ready(function() {

  $('form').on('submit', function(event) {

      // Prevents the default action of the button (In this case prevents the form from submitting)
      event.preventDefault()

      // Retrieves the value from the username and password textfields
      var username = $('#username').val()
      var password = $('#password').val()
      var passwordConfirmation = $('#passwordConfirm').val()

      // Checks the value returned from the Validate Login
      if(registerUser(username, password)) {
        window.location = "browse.html"
      } else {
        // If there is an old error message remove it
        $(".error").remove()

        // Add the new error message
        $('form').append("<div class=\"error\">Error: Could not complete registration</div>")
      }
    })

    function registerUser(username, password) {
      return addUser(username, password)
    }
})
