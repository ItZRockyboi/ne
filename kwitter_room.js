var firebaseConfig = {
      apiKey: "AIzaSyA1XEU7LeJoHrhd_eGR2O7cKrk9rMIzjS0",
      authDomain: "kwitter-8d3c3.firebaseapp.com",
      databaseURL: "https://kwitter-8d3c3-default-rtdb.firebaseio.com",
      projectId: "kwitter-8d3c3",
      storageBucket: "kwitter-8d3c3.appspot.com",
      messagingSenderId: "1081603511444",
      appId: "1:1081603511444:web:4554b20723f73f30035081"
    };
    
    
    firebase.initializeApp(firebaseConfig);

var username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome "+username+"!";

function addRoom() {
      var room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding Room Name............."
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
var row="<div class='room_name'id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+room_names+"</div><hr> ";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
localStorage.setItem("room_name",name);

}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("Room_name");
      window.location="index.html";
      
}

