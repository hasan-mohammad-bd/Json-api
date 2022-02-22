//33-3 JSON placeholder, GET data, display data on UI

//this file is from jsonplaceholder.typicode.com

//meaning of fetch: go for and then bring back,
//got: a url in string mode.
//response for converting json/stringified object to object
//then console.log json.

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}



//33-4 //33-5
//================================================
//go to jsonplaceholder.com and pick users, then copy the url and rest of the work as below.

function loadUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUsers(data))//a function can be called from here.
}
//here function parameter can be anything not only data
function displayUsers(data){
    const ul = document.getElementById("users");
    for(const user of data){       
        const li = document.createElement("li");
        li.innerText = `name: ${user.name}\n email: ${user.email}`;
        ul.appendChild(li);

    }
}//this function is used in loadUsers function.


//another example
function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data))
}

