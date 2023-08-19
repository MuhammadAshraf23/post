import { auth,app } from "./firbase.mjs"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const btn =document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const email= document.getElementById('email').value
    const password= document.getElementById('Pass').value

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    alert("login")
    console.log(user)
    window.location.href='./dashBoard.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})