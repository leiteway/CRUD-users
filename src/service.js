// Metodo GET R (read) del CRUD.
async function getUsers() {
    const result = await fetch("http://localhost:3000/users")
    const data = await result.json()
    return data
}

let sectionTag = document.getElementById("user-list")
async function printUsers() {
    let users = await getUsers()
    users.map(user => {
        sectionTag.innerHTML +=
        `<h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.age}</p>
        <button onclick="deleteUser('${user.id}')">Delete</button>`
    })
}

//Metodo DELETE D (delete) del CRUD.
async function deleteUser(id) {
    const result = await fetch(`http://localhost:3000/users/${id}`,
    {method: "DELETE"})
    return result
}

//Método POST C (create) del CRUD 
async function postUser() {
    const newUser = {
        "name": "Desi",
        "email": "besidefresi@gmail.com"
    }

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
        };
    const result = await fetch(`http://localhost:3000/users`, options)
    return result

}

//Create del CRUD con formulario - metodo POST
// Coge info de un formulario
async function createUser() {
    const formUser = document.getElementById("users-form")

    const newUser = {
        "name": formUser.elements[0].value,
        "email": formUser.elements[1].value
    };

    const result = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser),
    })
}
