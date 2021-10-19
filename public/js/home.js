const commentHandler = document.querySelectorAll(".commentHandler")
const deleteBtn = document.querySelectorAll(".delete-post")
const formSubmit = document.querySelectorAll(".form-submit")


async function addComment(event) {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {

        const post_id = event.target.getAttribute('data-id');
        const comment = this.querySelector(".comment-text").value.trim();
        console.log(comment)
        const response = await fetch(`/api/comment/`, {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
            headers: {
                "content-type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log("failed to add comment")
        }
    }


}

async function deleteComment(event) {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {

        const id = event.target.getAttribute('data-id');
        console.log(id)
        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log("failed to delete post")
        }
    }

}

async function updateComment(event) {
    event.preventDefault()
    
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id)
        
        const title = this.querySelector(".update-title").value.trim();
        const post = this.querySelector(".update-text").value.trim();
        console.log(title)

        const response = await fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, post }),
            headers: {
                "content-type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace('/');

        } else {
            console.log("failed to update post")
        }
    }

}

formSubmit.forEach(async (btn) => { btn.addEventListener("click", updateComment) })
deleteBtn.forEach((btn) => { btn.addEventListener("click", deleteComment) })
commentHandler.forEach((btn) => { btn.addEventListener("click", addComment) })