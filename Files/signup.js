import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const db = getDatabase();
const auth = getAuth(app);

const SignUpBtn = document.getElementById('signup-submit-btn');

// go data into realtime database 
SignUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    set(ref(db, 'users/' + document.getElementById('username').value), {
        UserName: document.getElementById('username').value,
        UserEmail: document.getElementById('useremail').value,
        PhoneNumber: document.getElementById('usernum').value,
        UserPassword: document.getElementById('userpass').value,
    })
    RegisterUser();
    alert('Sign Up successfully!');
    window.location.href = './packages.html';
});

// signup with email and password 

const UserName = document.getElementById('username');
const UserEmail = document.getElementById('useremail');
const UserNumber = document.getElementById('usernum');
const UserPassword = document.getElementById('userpass');

const RegisterUser = () => {
    // evt.preventDefault();

    createUserWithEmailAndPassword(auth, UserEmail.value, UserPassword.value)
        .then((userCredential) => {
            // Signed up 
            console.log(userCredential);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

