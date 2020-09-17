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
}
