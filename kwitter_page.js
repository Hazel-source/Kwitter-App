//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDE1YO6o3gdkE8hKqUEpdwIJY6pkg0hz8A",
    authDomain: "class-test-160ff.firebaseapp.com",
    projectId: "class-test-160ff",
    storageBucket: "class-test-160ff.appspot.com",
    messagingSenderId: "44737223281",
    appId: "1:44737223281:web:8c03353f97468735ff19d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name , 
message: msg,
like: 0
});
document.getElementById("msg").value = "";
}
//End code
 } });  }); }
getData();
