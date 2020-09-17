const usersUrl = "http://localhost:3000/users"

let newHeader = document.createElement("h1");
newHeader.innerText = "Use #submitData in Dev Tools. Pass in name and email strings."
document.body.append(newHeader);

const submitData = (name, email) => {

    return fetch(usersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                email
            })
        })
        .then(response => response.json())
        .then(object => {
            document.body.innerHTML = object["id"]
        })
        .catch(error => {
            document.body.innerHTML = error.message
        })
};