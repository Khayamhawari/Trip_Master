import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

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
const dbref = ref(db);

const UserEmail = document.getElementById('useremail');
const UserPassword = document.getElementById('userpass');
const SignInBtn = document.getElementById('signin-submit-btn');

const SignInUser = () => {
    // evt.preventDefault();

    signInWithEmailAndPassword(auth, UserEmail.value, UserPassword.value)
        .then((userCredential) => {
            // Sign In 
            console.log(userCredential);
            alert('Login Successfully!')
            setTimeout(()=>{
                window.location.href = './packages.html';
            }, 2000)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            alert('Somthing went wrong! Please fill the details correctly');
        });
       
}

SignInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    SignInUser();
});