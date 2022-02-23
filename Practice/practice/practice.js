//data load and by pressing the button show the user email and name in ui as list.
function theUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(rec => rec.json())
    .then(json => identity(json))
}

function identity(json){
    const ul = document.getElementById("users")
    for(const user of json){
        const li = document.createElement("li");
        li.innerHTML = `Name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}