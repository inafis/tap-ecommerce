var databaseUsers = JSON.parse(localStorage.getItem("databaseUsers")) || []


// Helper function to add a user in the correct format to local storage
function addUser(username, password) {
  console.log(databaseUsers)

  if(!userExists(username)) {
    databaseUsers.push({id: databaseUsers.length + 1, username: username, password: password })
    localStorage.setItem("databaseUsers", JSON.stringify(databaseUsers))
    return true
  }

  return false
}

// Helper function to determine if a user exists
// Returns True if a username is found in the list of users
function userExists(username) {
  return databaseUsers.filter((user) => {
    return user.username === username
  }).length != 0
}

// Finds the user that is assigned to the id parameter
// for an invalid id will not return
function getUserById(id) {
  return databaseUsers.filter((user) => {
    return user.id === id
  })[0]
}

// Helper function to see if a username and password are valid for login
// Returns True if username and password both match for a user
function validateUser(username, password) {
  if(userExists(username)) {
    for(var index in databaseUsers) {
      var user = databaseUsers[index]
      if(user.username === username && user.password === password) {
        return true
      }
    }
  }

  return false
}
