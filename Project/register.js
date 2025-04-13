let registerForm = document.getElementById('register') //Initlializing the register submit form
registerForm.addEventListener('submit',register) //Adding event listener to the register form to intiate the register function

let errorSection = document.getElementById('error') //Initializing the error section to display error messages

function register(e){
    e.preventDefault()
    let username = document.getElementById('username').value 
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(validString(username) || validString(email) || validString(password)){
        errorSection.innerHTML = `Username, Email and Password cannot be empty!!` //Error message if any of the fields are empty

    }else{
        errorSection.innerHTML= " " //Clearing the error message if all fields are filled
        console.log(username)
        console.log(email)
        console.log(password)

        const user = {
            username: username,
            email: email,
            password: password
        }

        let section = document.getElementById('Registered')
        section.innerHTML = `Registered successfully!` //Success message after registration

        console.log(user) //Logging the user object to the console
    }

    document.getElementById('username').value = " " //Clearing the register username field
    document.getElementById('email').value = " " //Clearing the email field
    document.getElementById('password').value = " " //Clearing the register password field
}

function validString(word){ 
    return word == "" 
}