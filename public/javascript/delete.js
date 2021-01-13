const deletePostHandler = async function(event) {
    event.preventDefault();
    const postId = document.getElementById('post-id')
console.log("postId:", postId);
    fetch("/api/post/:id" + postId.value, {
        method: "delete"
    })
    .then(function(){
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.addEventListener('#deleteBtn', deletePostHandler);
