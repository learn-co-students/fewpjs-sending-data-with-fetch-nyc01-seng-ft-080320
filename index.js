// Add your code here
submitData = (name, email) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {name: name,
                email: email}
            )
        }
    return fetch("http://localhost:3000/users", configObj).then(function(response){
        return response.json()
    }).then(function(objects){
        addObj(objects)
    }).catch(function(error){
        addError(error.message);
    });
};

function addError(error){
    const body = document.querySelector("body")
    const newP = document.createElement("p")
    newP.textContent = error
    body.append(newP)
}

function addObj(objects){
    const body = document.querySelector("body")
    const newP = document.createElement("p")
    newP.textContent = objects.id
    body.append(newP)
}