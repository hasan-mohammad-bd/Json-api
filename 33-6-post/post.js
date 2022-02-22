//33-6 Load posts and display on the website with CSS

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

loadPosts();

function displayPosts(posts){
    const postContainer = document.getElementById("posts");
   for(const post of posts){
       const div = document.createElement("div");
       div.classList.add("post")
       div.innerHTML = `
       <h3>${post.title}</h3>
       <p>${post.body}</p>
       `

    //another way
    //    const h2 = document.createElement("h2");
    //    const p = document.createElement("p");
    //    div.style.padding = "20px";
    //    h2.innerText = post.title;
    //    p.innerText = post.body;
    //    div.appendChild(h2);
    //    div.appendChild(p);
       postContainer.appendChild(div);

   }
}