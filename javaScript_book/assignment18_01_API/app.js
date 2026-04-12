fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response){
        return response.json();
    })
    .then(function (posts){
        posts.forEach(function (post){
            var main = document.getElementById("api")
            
            var card = document.createElement("div")
            card.style.border = "5px solid #ccc"
            card.style.borderRadius = "10px"
            card.style.padding = "4px"
            card.style.margin = "10px"
            card.style.display = "inline-block"
            card.style.width = "320px"
            card.style.height = "420px"
            card.style.textAlign = "center"

            var title = document.createElement("h2")
            title.textContent = post.title;

            var body = document.createElement("p")
            body.textContent = post.body

            var img = document.createElement("img")
            img.src = `https://picsum.photos/seed/${post.id}/300/200`
            img.alt = post.title
            img.style.width = "300px"
            img.style.height = "200px"

            card.appendChild(img)
            card.appendChild(title)
            card.appendChild(body)
            main.appendChild(card)
        })
    })
    .catch(function (error){
        console.log(error);
    })
    