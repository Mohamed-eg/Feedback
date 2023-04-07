const firebaseConfig = {
  apiKey: "AIzaSyD65lRSsNxR-DxRF4ydW-lB1TqGPtSkvWU",
  authDomain: "feedback-de854.firebaseapp.com",
  databaseURL: "https://feedback-de854-default-rtdb.firebaseio.com",
  projectId: "feedback-de854",
  storageBucket: "feedback-de854.appspot.com",
  messagingSenderId: "533601045656",
  appId: "1:533601045656:web:38a95e5df57628107314ed",
};
firebase.initializeApp(firebaseConfig);
var formDB = firebase.database().ref("feedbackform");
const gitValue = (id) => {
  return document.getElementById(id).value;
};
const submitfu = (e) => {
  e.preventDefault();
  const rateValue = gitValue("colector_input");
  const notesValue = gitValue("notes");
  panal = document.getElementById("panel").style.visibility = "hidden";
  saveData(rateValue, notesValue);
  setTimeout(() => {
    panal = document.getElementById("panel").style.visibility = "visible";
  }, 4000);
};
document.getElementById("feedbackform").addEventListener("submit", submitfu);
const saveData = (rate, notes) => {
  var newPerson = formDB.push();
  newPerson.set({
    hisRate: rate,
    hisNote: notes,
  });
};
