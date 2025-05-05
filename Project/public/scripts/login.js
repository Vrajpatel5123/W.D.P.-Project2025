
import { setCurrentUser } from "./register.js"
import { fetchData } from "./logout.js"

let loginForm = document.getElementById('login')
loginForm.addEventListener('submit',login)

let errorSection = document.getElementById('error')

function login(e){
    e.preventDefault()
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if(validString(username) || validString(password)){  
        errorSection.innerHTML = `Username and Password cannot be empty!!`
    }else{
        errorSection.innerHTML= " "

        const user = {
            Username: username,
            Password: password
        }

        fetchData('/users/login', user, "POST")
        .then(data =>{
            if(!data.message){
                setCurrentUser(data)
                window.location.href = "index.html"
            }
        })
        .catch(err => {
            errorSection.innerHTML = `${err.message}`
        })

        let section = document.getElementById('Welcome')
        section.innerHTML = `Welcome ${username}!`

        
    }

    document.getElementById('username').value = ""
    document.getElementById('password').value = ""
}

function validString(word){
    return word == ""
}