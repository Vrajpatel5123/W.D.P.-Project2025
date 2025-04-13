let postChatForm = document.getElementById('postChat')
postChatForm.addEventListener('submit', postChat)

let errorSection = document.getElementById('error')

function postChat(e){
    e.preventDefault()
    let user = document.getElementById('postTitle').value
    let P = document.getElementById('Post').value

    if(validString(user) || validString(post)){
        errorSection.innerHTML = `Title or Picture cannot be empty!!` //Error message if any of the fields are empty
    }else{
        errorSection.innerHTML =" "
        console.log(user)
        console.log(P)

        const post = {
            user: user,
            Post: P
        }

        let section = document.getElementById('post')
        section.innerHTML = `Post successfully!`
    }

    document.getElementById('postTitle').value = " " //Clearing the post title field
    document.getElementById('Post').value = " " //Clearing the post picture field

}

function validString(word){
    return word == ""
}