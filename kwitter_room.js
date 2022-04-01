// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAkRXinEL3qUQB12lq6Flm2aYJJlt_hXPQ",
      authDomain: "kwitter-5abdc.firebaseapp.com",
      databaseURL: "https://kwitter-5abdc-default-rtdb.firebaseio.com",
      projectId: "kwitter-5abdc",
      storageBucket: "kwitter-5abdc.appspot.com",
      messagingSenderId: "79248633659",
      appId: "1:79248633659:web:f911ef78e1c6f22afdd11e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
