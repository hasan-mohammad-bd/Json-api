//load post from json and show the post in html
function createPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(rec => rec.json())
    .then(data => gettingPost(data))
}

createPost() //this allow loading the content when the page is loaded.

function gettingPost(posts){
    const containerDiv = document.getElementById("posts");
    for(const post of posts){
        console.log(post);
        const div = document.createElement("div");
        div.classList.add("post")
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        containerDiv.appendChild(div);
    }
}
