// Add your code here
/*  
    const destinationURL = "http://localhost:3000/dogs";

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    let formData = {
      dogName: "Byron",
      dogBreed: "Poodle"
    };

    fetch(destinationURL, configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
      })
      .catch(function(error) {
        alert("Bad things!");
        console.log(error.message);
      });
*/

const submitData = (userName, userEmail) => {
  const destinationURL = 'http://localhost:3000/users';

  let paramsData = {
    name: userName,
    email: userEmail
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(paramsData)
  }

  return fetch(destinationURL, configObj)
    .then(resp => resp.json())
    .then(json => {
      const newId = json.id;
      document.querySelector('body').append(newId);
    })
    .catch(error => {
      document.querySelector('body').append(error.message);
    });
}