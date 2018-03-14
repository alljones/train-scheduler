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
var trainName = $("#trainName").val().trim();
var dest = $("#destination").val().trim();
var firstTime = $("#firstTime").val().trim();
var freqInput = $("#freqInput").val().trim();

// 3b: Creates local object for holding data
var newTrainInfo = {
  trainName = trainName;
  destination = dest;
  firstTrainTime = firstTime;
  frequency = freqInput;
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

// 4. Getting from the data from db. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().trainName;
  var destination = childSnapshot.val().destination;
  var firstTrainTime = childSnapshot.val().firstTrainTime;
  var frequency = childSnapshot.val().frequency;

  // Log Train Info in Console
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);

  // Prettify the employee start
  var empStartPretty = moment.unix(firstTrainTime).format("HH:mm");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  console.log(empMonths);

  // Calculate the total billed rate
  var empBilled = empMonths * empRate;
  console.log(empBilled);

  // 5. Displaying on the html page
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  firstTrainTime + "</td><td>" + frequency + "</td></tr>");
});










