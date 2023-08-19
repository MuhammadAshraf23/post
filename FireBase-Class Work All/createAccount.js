import { auth,app,db } from "./firbase.mjs"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { doc, setDoc   } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const btn =document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const name= document.getElementById('name').value
    const roll= document.getElementById('roll').value
    const number= document.getElementById('number').value
    const email= document.getElementById('email').value
    const password= document.getElementById('Pass').value

const userdata={
    name:name,
    roll:roll,
    number:number,
    email:email,
    password:password,
}





createUserWithEmailAndPassword(auth, email, password)
.then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    try {
        const docRef = await setDoc(doc(db, "users", user.uid),{

            
            ...userdata,
           user:user.uid
            
        } 
        );
        console.log("Document written with ID: ", user.uid);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    console.log(user);
    alert("wellcome")
    window.location.href='./login.html'
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});
})