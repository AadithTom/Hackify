// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTfRm5iBCC1Gk0CWLDFAKBPgTgEGtieV8",
  authDomain: "health-dataset-88dbe.firebaseapp.com",
  projectId: "health-dataset-88dbe",
  storageBucket: "health-dataset-88dbe.appspot.com",
  messagingSenderId: "440667946648",
  appId: "1:440667946648:web:012932b37c93749fb81aed",
  measurementId: "G-VJCPVZ74NC"
};

// Get reference to the 'Doctors' collection and the specific document
const doctorRef = db.collection("Doctors").doc("Doctor1");

// Fetch data from Firestore
doctorRef.get().then((doc) => {
    if (doc.exists) {
        // Display the value of the 'Degree' field
        const degree = doc.data().Degree;
        document.getElementById("doctorDetails").innerText = `Doctor1's Degree: ${degree}`;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
