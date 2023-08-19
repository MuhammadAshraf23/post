import { auth,app,db } from "./firbase.mjs"
import { doc, setDoc ,updateDoc  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


const name = document.getElementById('name')
const roll = document.getElementById('roll')
const number = document.getElementById('mobile')


// const btn =document.getElementById('btn1')
// btn.addEventListener('click',()=>{
//     window.location.href='./update.html'

// })
const btnu=document.getElementById("btnu")

btnu.addEventListener('click',async()=>{

    const currentuid=(auth.currentUser.uid);
    const washingtonRef = doc(db, "users", currentuid);
    
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
        
    name:name.value,
    roll:roll.value,
    number:number.value,

});

})
