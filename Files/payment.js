const payBtn = document.getElementById('pay-now');
// const displayMess = document.getElementById('success-show')
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Phone = document.getElementById('phone-number');
const Mess = document.getElementById('msg');
const Amount = document.getElementById('amt');
const success = document.getElementById('success');
const danger = document.getElementById('danger');
const form = document.querySelector("form");

payBtn.addEventListener('click', () => {
    // e.preventDefault();
    if (Name.value === "" || Email.value === "" || Phone.value === "" || Amount.value === "") {
        alert('Please fill the details!');
        danger.style.display = "block";
    }
    else {
        setTimeout(() => {
            Name.value = '';
            Email.value = '';
            Phone.value = '';
            Mess.value = '';
            Amount.value = '';
            success.style.display = "block";
        }, 2000);
        alert('Paid Successfully!');
        form.reset();
        return false;
    }

    setTimeout(() => {
        danger.style.display = "none";
        success.style.display = "none";
    }, 4000);
});


// go data into database from here

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAbRcpzO4qMrRdRGiGg6Z7Vh00pQzKJqDQ",
    authDomain: "quicktrip-project.firebaseapp.com",
    projectId: "quicktrip-project",
    storageBucket: "quicktrip-project.appspot.com",
    messagingSenderId: "82813329780",
    appId: "1:82813329780:web:489f6f51bc03a72fbe8c21"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  const payingBtn = document.getElementById('pay-now');
  
  // go data into realtime database 
  payingBtn.addEventListener('click', (e) => {
      e.preventDefault();
      set(ref(db, 'paid/' + document.getElementById('name').value), {
          UserName: document.getElementById('name').value,
          UserEmail: document.getElementById('email').value,
          PhoneNumber: document.getElementById('phone-number').value,
          UserAmount: document.getElementById('amt').value,
      })
    //   alert('Paid successfully!');
  });
  

