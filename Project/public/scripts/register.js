import { fetchData } from "./logout.js"

let registerForm = document.getElementById('register') //Initlializing the register submit form
if(registerForm) registerForm.addEventListener('submit',register) //Adding event listener to the register form to intiate the register function

let errorSection = document.getElementById('error') //Initializing the error section to display error messages

function register(e){
    e.preventDefault()

    if(validString(firstName) || validString(lastName) || validString(username) || validString(email) || validString(password)){
        errorSection.innerHTML = `Username, Email and Password cannot be empty!!` //Error message if any of the fields are empty

    }else{
        errorSection.innerHTML= " " //Clearing the error message if all fields are filled
        
        let firstName = document.getElementById('firstName').value
        let lastName = document.getElementById('lastName').value
        let username = document.getElementById('username').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        const user = {
            Firstname: firstName, 
            Lastname: lastName,
            Username: username,
            Email:  email,
            Password: password       
        }

        fetchData('/users/register', user, "POST")
        .then(data => {
            if(!data.message){
                setCurrentUser(data)
                window.location.href = "index.html"
            }
        })
        .catch(err => {
            errorSection.innerHTML = `${err.message}`
        })

        let section = document.getElementById('Registered')
        section.innerHTML = `Registered successfully!` //Success message after registration

        console.log(user) //Logging the user object to the console
    }
}

// local storage
export function setCurrentUser(user){
    localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser(user){
    return JSON.parse(localStorage.getItem('user'))
}

export function removeCurrentUser(){
    localStorage.removeItem('user')
    window.location.href = "index.html"
}

function validString(word){ 
    return word == "" 
}