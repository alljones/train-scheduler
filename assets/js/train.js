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
$("#addInputs-btn").on("click", function(event) {
  
  event.preventDefault();

  // 3a : Store Inputs from Form
var newTrain = $("#trainName").val().trim();
var newDest = $("#destination").val().trim();
var newFirstTime = $("#firstTime").val().trim();
var newFreq = $("#freqInput").val().trim();

// 3b: Creates local object for holding data
var trainInfo = {
  trainName = newTrain;
  destination = newDest;
  firstTrainTime = newFirstTime;
  frequency = newFreq;
};

// 3c: Uploads train data to the database
database.ref().push(trainInfo);

// Logs everything to console
console.log(trainInfo.trainName);
console.log(trainInfo.destination);
console.log(trainInfo.firstTrainTime);
console.log(trainInfo.frequency);

// Clears all of the text-boxes
$("#trainName").val("");
$("#destination").val("");
$("#firstTime")("");
$("#freqInput").val("");
});




// 4. Getting from the data from db


// 5. Displaying on the html page