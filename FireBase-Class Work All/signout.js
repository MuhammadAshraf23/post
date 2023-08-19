import { auth,app } from "./firbase.mjs"
import { signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


const btn =document.getElementById('btn')

btn.addEventListener('click', ()=>{

    signOut(auth).then(() => {
        alert('Sign-out successful')

        window.location.href='./index.html'
    }).catch((error) => {
        // An error happened.
    });
})