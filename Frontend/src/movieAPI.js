const api = "http://localhost:8080"

export const getAll = () =>
    fetch(`${api}/movies`)
        .then(res => res.json())
        .then(data => data)