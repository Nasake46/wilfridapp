let baseUrl = 'http://edu.project.etherial.fr'

export const getToken = () => {
    return localStorage.getItem('token')
}

export const login = async ({ email, password }) => {

    let response = await fetch(`${baseUrl}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    let json = await response.json()

    return json
}

export const register = async ({ firstname, lastname, email, password, password_verif }) => {

    let response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            password_verif: password_verif 
        })
    })

    let json = await response.json()

    return json
}

export const getInformations = async () => {

    let response = await fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data

}

export const updateName = async ({ firstname, lastname, birthdate }) => {

    let response = await fetch(`${baseUrl}/users/me`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }, 
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            birthdate: birthdate,
        })
    })

    let json = await response.json()

    return json.data

}