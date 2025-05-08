import {getCurrentUser, removeCurrentUser, setCurrentUser} from "./register.js"
import { fetchData } from "./logout.js"

const user = getCurrentUser()

if(!user) window.location.href = "index.html"  //Redirecting to index.html if user is not logged in

const profile = document.getElementById("profile")

profile.innerHTML += `
    <h1>Welcome ${user.username}!</h1>
    <button id= "deleteAccount">Delete</button>
`

const deleteAccount = document.getElementById("deleteAccount")
deleteAccount.addEventListener("click", deleteUser)

function deleteUser(){
    if(confirm("Are you affrimative you want to delete your account?")){
        fetchData('/users/deleteAccount', user, "DELETE")
        .then(data => {
            if(!data.message){
                removeCurrentUser()
                window.location.href = "index.html"
            }
        })
        .catch(err => {
            errorSection.innerHTML = `${err.message}`
        })
    }
}

const editUserForm = document.getElementById("editForm")
if(editUserForm) editUserForm.addEventListener('submit', editUsername)

function editUsername(e){
    e.preventDefault()

    user.username = document.getElementById('username').value

    fetchData('/users/update', user, "PUT")
    .then(data => {
        removeCurrentUser(data)
        setCurrentUser(data)
    })
    .catch(err => {
        errorSection.innerHTML = `${err.message}`
    })
}