import { initializeApp } from "firebase/compat/app";
import { getDatabase, ref, set } from "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkbXgvXiKkfLRXrwc__Q3neW-RamZ0Mds",
    authDomain: "ersd-bdf6e.firebaseapp.com",
    projectId: "ersd-bdf6e",
    storageBucket: "ersd-bdf6e.appspot.com",
    messagingSenderId: "268713850905",
    appId: "1:268713850905:web:b2076e8294b53079fed288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function save() {
    var name = document.getElementsByName('name')[0].value;
    var phnumber = document.getElementsByName('phone')[0].value;
    var region = document.getElementsByName('region')[0].value;

    set(ref(database, 'mentors/' + name), {
        phnumber: phnumber,
        name: name,
        region: region
    }).then(() => {
        alert('Saved');
    }).catch((error) => {
        console.error('Error saving data: ', error);
    });
} 

