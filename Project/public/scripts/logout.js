import { removeCurrentUser, getCurrentUser } from "./register.js"
const nav = document.querySelector('nav')

if(getCurrentUser()){
    nav.innerHTML = `
    <div class="navdiv">
        <div class="logo">
          <a href="#">Gamer Hangout <i class="fa-solid fa-gamepad"></i></a>
        </div>
        <ul>
          <li><a href="index.html"> Home </a></li>
          <li><a href="friends.html"> Friends </a></li>
          <li><a href="postChat.html"> Post</a></li>
          <li><a href="profile.html"> Profile </a></li>
          <li><a id="logout">Logout</a></li>
        </ul>
      </div>
    `
} else{
    nav.innerHTML = `
    <div class="navdiv">
        <div class="logo">
          <a href="#">Gamer Hangout <i class="fa-solid fa-gamepad"></i></a>
        </div>
        <ul>
          <li><a href="index.html"> Home </a></li>
          <li><a href="friends.html"> Friends </a></li>
          <li><a href="postChat.html"> Post</a></li>
          <button><a href="register.html">Sign In</a></button>
          <button><a href="login.html">Log In</a></button>
        </ul>
      </div>
    `
}

const logout = document.getElementById('logout')
if(logout) logout.addEventListener('click', removeCurrentUser)

// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if (response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}