function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    appendToDom(object['id']);
  })
  .catch(function(error) {
    appendToDom(error.message);
  });
}

function appendToDom(message) {
  // only innerHTML works here, why?
  document.querySelector('body').innerHTML = message
}