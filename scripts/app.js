

import { 
    onAuthStateChanged,
    // signOut
} 
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// import { collection, addDoc,  updateDoc,
//   deleteDoc, } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 
import { auth , db } from "./config.js";
onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = "login.html";
    }
  });






const arr = []


  const form = document.querySelector("#form");
  const title = document.querySelector("#title");
  const des = document.querySelector("#des");
  const divv = document.querySelector("#div");
function renderBlog(){
        divv.innerHTML = ''
        arr.map((item,index)=>{
          divv.innerHTML += ` 
         <div class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">${item.titlee}</h2>
                    <p>${item.dess}</p>
                    <div class="card-actions justify-end">
                        <button type="button" class="btn btn-danger delete-btn" data-index="${index}">delete</button>
                        <button type="button" class="btn btn-primary edit-btn" data-index="${index}">edit</button>
                    </div>
                </div>
            </div>
    ` 
    // console.log(item);
        })  
      }





  form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    console.log(title.value);
    console.log(des.value);
    try {
      const docRef = await addDoc(collection(db, "Blog"), {
        BlogTitle : title.value,
        BlogDescription: des.value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    arr.push({
      titlee:title.value,
      dess:des.value,
  })
    console.log(arr);
 renderBlog()
    
    title.value = ''
    des.value = ''
  })


  let deleteButton = document.querySelectorAll('.delete-btn');


  deleteButton.forEach((btn) => {
    console.log(btn);
    
    btn.addEventListener("click", async (event) => {
        const index = event.target.getAttribute('data-index');
        console.log(array[index]); 
        // await deleteDoc(doc(db, "post", array[index].id));  
        // console.log("Data deleted"); 
        // array.splice(index, 1);
        // renderscreen();  
    });
});