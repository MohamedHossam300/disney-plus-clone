const api = "http://localhost:8080"

export const getAll = () =>
    fetch(`${api}/movies`)
        .then(res => res.json())
        .then(data => data)

export const getMovie = (id) =>
    fetch(`${api}/movies/${id}`)
        .then(res => res.json())
        .then(data => data)

export const createUsers = body =>
    fetch(`${api}/users`, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())

export const auth = body => {
    fetch(`${api}/auth`, {
        method: "POST",
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json)
}