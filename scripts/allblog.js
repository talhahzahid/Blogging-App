// // import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-fireatore.js";
// import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-fireatore.js";
// import { auth , db } from "./config.js";
import { 
    collection,
     getDocs,
    } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 

    import {  db } from "./config.js";

    const divv = document.querySelector("#div");
  
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
  