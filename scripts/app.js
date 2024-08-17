

import { 
    onAuthStateChanged,
    // signOut
} 
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { 
  collection,
   addDoc, 
   getDocs,
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 
import { auth , db } from "./config.js";
onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = "login.html";
    }
  });

  
  async function getDatafromfirebase() {
  let arr = []
const querySnapshot = await getDocs(collection(db, "Blog"));
querySnapshot.forEach((doc) => {
  arr.push(doc.data())
});
console.log(arr);
arr.map((item)=>{
  divv.innerHTML += ` 
 <div class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">${item.BlogTitle}</h2>
            <p>${item.BlogDescription}</p>
            <div class="card-actions justify-end">
                <button type="button" class="btn btn-danger delete-btn">delete</button>
                <button type="button" class="btn btn-primary edit-btn">edit</button>
            </div>
        </div>
    </div>
`
})  
}

getDatafromfirebase()



  const form = document.querySelector("#form");
  const title = document.querySelector("#title");
  const des = document.querySelector("#des");
  const divv = document.querySelector("#div");






  form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    divv.innerHTML = ''
    try {
      const docRef = await addDoc(collection(db, "Blog"), {
        BlogTitle : title.value,
        BlogDescription: des.value,
        uid: auth.currentUser.uid,
      });
      console.log("Document written with ID: ", docRef.id);
      getDatafromfirebase()
    } catch (e) {
      console.error("Error adding document: ", e);
    }  
    title.value = ''
    des.value = ''
  })

