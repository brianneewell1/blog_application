const editFormHandler = async function(event) {
    event.preventDefault();
 

    const titleEl = document.getElementById('post-title').value;
    // const bodyEl = document.getElementById('post-body');
    //const titleEl = document.querySelector('input[name="post-title"]');
    const bodyEl = document.querySelector ('textarea[name="post-body"]').value;
    const postId = document.getElementById('post-id').value;
    //console.log("bodyEl:" + bodyEl.value);
    //console.log("titleEl:" + titleEl.value);
    //console.log('post-id: '+ postId.value);

    const data = { title: titleEl, body:bodyEl };
    console.log(data);

    fetch("http://localhost:3001/dashboard/edit/"+postId, {
    method: 'PUT', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
    
    
    //     // fetch("/api/post/" + postId.value, {
                
    //         method: "put",
    //         body: JSON.stringify({
    //             title: titleEl.value,
    //             body: bodyEl.value
    //             }),
    //         headers: {"Content-Type": "application/json"}
    //     })
    //     .then(function(){
    //         document.location.replace("/dashboard");
    //     })
    //     .catch(err => console.log(err))
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);