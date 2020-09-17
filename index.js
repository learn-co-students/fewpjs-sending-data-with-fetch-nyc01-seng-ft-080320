const submitData = (userName, userEmail) => {
    const url = 'http://localhost:3000/users'
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }

    return fetch( url, configObj)
        .then(reponse => reponse.json())
        .then(data => renderData(data))
        .catch(error => appendErrorToDOM(error.message))
}

const renderData = (dataCollection) => {
    const body = document.querySelector('body')
    const ul = document.createElement('ul')
    ul.innerHTML = `
        <li>UserName: ${dataCollection.name}</li>
        <li>Email: ${dataCollection.email}</li>
        <li>Id: ${dataCollection.id}</li>
    `
    body.append(ul)
}

const appendErrorToDOM = (message) => {
    const body = document.querySelector('body')
    const el = document.createElement('p')
    el.textContent = message
    body.append(el)

}