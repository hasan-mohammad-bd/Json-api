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

   //33.7 GET, POST, PATCH, DELETE, CRUD, GET Vs POST
   
   //CRUD operations(create(post), read(get), update, delete)
   //=================================
   //to load any data from another server is called GET
   //to post any data to a server is called POST
   //if is data is available then update if data is not available, just update or patch. this hole process is called PUT.
   //edit is called PATCH(updating).
   //to delete is called DELETE

   //*******************************
   //find out difference between get and post very important for interview.

   //CRUD vs Rest api
   
   //******************************* 

   //33-8 Debug API, Network tab,Status code, headers, bad API
    //debug going network tab, load the file, find the Api file, go to the "header tab" . here you can check "status code" and other factors.
    //you can go to preview tab to see the file also can see the response tab to get more info.
