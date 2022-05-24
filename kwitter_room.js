var firebaseConfig = {
      apiKey: "AIzaSyC-RudEbeKREppihiSqgjxE-zS5Fc3P3Mw",
      authDomain: "kwitter-c8ba1.firebaseapp.com",
      databaseURL: "https://kwitter-c8ba1-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8ba1",
      storageBucket: "kwitter-c8ba1.appspot.com",
      messagingSenderId: "480710167658",
      appId: "1:480710167658:web:3c07d168b6a0db3e6ace13"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });

      localStorage.setitem("room_name",room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name -"+ Room_name);
      row = "<div class= 'room_name'  id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
                  window.location = "kwitter_page.html";
      }

      //End code
      });});}
getData();





