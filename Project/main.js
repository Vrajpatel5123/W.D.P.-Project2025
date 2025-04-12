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
        console.log(username)
        console.log(password)

        const user = {
            userName: username,
            password: password
        }

        let section = document.getElementById('Welcome')
        section.innerHTML = `Welcome ${username}!`

        console.log(user)
    }

    document.getElementById('username').value = " "
    document.getElementById('password').value = " "
}

function validString(word){
    return word == ""
}