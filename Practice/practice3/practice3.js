//get comments from json placeholder
function getComments(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(rec => rec.json())
    .then(data => showComments(data))
}

function showComments(comments){
    const commentsBox = document.getElementById("comments");
    for(const comment of comments){
        const div = document.createElement("div");
        div.classList.add("beautify")
        div.innerHTML = `
        <h3>name: ${comment.name}</h3>
        <p>the comment: ${comment.body}</p>
        `
        commentsBox.appendChild(div);

        
    }
}