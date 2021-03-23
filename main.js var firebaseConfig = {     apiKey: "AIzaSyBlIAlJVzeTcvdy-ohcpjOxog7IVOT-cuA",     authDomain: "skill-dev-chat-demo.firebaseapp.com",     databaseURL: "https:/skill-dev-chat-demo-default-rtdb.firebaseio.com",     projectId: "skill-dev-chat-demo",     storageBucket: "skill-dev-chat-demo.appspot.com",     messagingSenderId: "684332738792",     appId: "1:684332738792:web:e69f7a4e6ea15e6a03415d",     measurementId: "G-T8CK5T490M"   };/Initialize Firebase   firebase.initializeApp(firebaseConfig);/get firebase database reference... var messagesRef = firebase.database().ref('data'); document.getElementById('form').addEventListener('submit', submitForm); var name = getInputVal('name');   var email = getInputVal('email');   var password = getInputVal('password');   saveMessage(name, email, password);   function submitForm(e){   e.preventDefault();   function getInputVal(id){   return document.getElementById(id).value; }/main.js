 var firebaseConfig = {
    apiKey: "AIzaSyBlIAlJVzeTcvdy-ohcpjOxog7IVOT-cuA",
    authDomain: "skill-dev-chat-demo.firebaseapp.com",
    databaseURL: "https://skill-dev-chat-demo-default-rtdb.firebaseio.com",
    projectId: "skill-dev-chat-demo",
    storageBucket: "skill-dev-chat-demo.appspot.com",
    messagingSenderId: "684332738792",
    appId: "1:684332738792:web:e69f7a4e6ea15e6a03415d",
    measurementId: "G-T8CK5T490M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// get firebase database reference...
var messagesRef = firebase.database().ref('data');
document.getElementById('form').addEventListener('submit', submitForm);
var name = getInputVal('name');
  var email = getInputVal('email');
  var password = getInputVal('password');
  saveMessage(name, email, password);
  function submitForm(e){
  e.preventDefault();
  function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, password){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    password:password,
    email:email,
  });}
  }
