const deletePostHandler = async function(event) {
    event.preventDefault();
    const postId = document.getElementById('post-id')

    fetch("/api/post-routes/" + postId.value, {
        method: "delete"
    })
    .then(function(){
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.addEventListener('#deleteBtn', deletePostHandler);
console.log("delete button clicked");
