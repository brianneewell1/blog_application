const deletePostHandler = async function(event) {
    event.preventDefault();
    const postId = document.getElementById('post-id')

    fetch("/api/post/" + postId.value, {
        method: "delete"
    })
    .then(function(){
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.addEventListener('#delete-btn', deletePostHandler);
