// Train Logic


// 1. Initial DB
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOrI6TpERYlbIUI5Zi33xZwflOZ-YIM78",
  authDomain: "train-32cdb.firebaseapp.com",
  databaseURL: "https://train-32cdb.firebaseio.com",
  projectId: "train-32cdb",
  storageBucket: "train-32cdb.appspot.com",
  messagingSenderId: "950093723303"
};
firebase.initializeApp(config);

// 2. setting up the db
var database = firebase.database();

// 3. Adding data to the db (train name, dest., first time & frequency, etc)
var trainName = $("#trainName").val().trim();
var dest = $("#destination").val().trim();
var firstTime = $("#firstTime").val().trim();
var freqInput = $("#freqInput").val().trim();

var trainInfo = {
  trainName = trainName;
  destination = dest;
  firstTrainTime = firstTime;
  frequency = freqInput;
}

database.ref().push(trainInfo);



// 4. Getting from the data from db


// 5. Displaying on the html page