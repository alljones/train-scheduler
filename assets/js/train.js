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
var trainName = $("#trainInput").val().trim();
var dest = $("#destInput").val().trim();
var firstTime = moment($("#timeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");
var freqInput = $("#freqInput").val().trim();

// 3b: Creates local object for holding data
var newTrainInfo = {
  name: trainName,
  destination: dest,
  firstTrainTime: firstTime,
  frequency: freqInput,
};

// 3c: Uploads train data to the database
database.ref().push(newTrainInfo);

// Logs everything to console
console.log(newTrainInfo.name);
console.log(newTrainInfo.destination);
console.log(newTrainInfo.firstTrainTime);
console.log(newTrainInfo.frequency);

// Alert
alert("Train successfully added!");

// Clears all of the text-boxes
$("#trainInput").val("");
$("#destInput").val("");
$("#timeInput").val("");
$("#freqInput").val("");

});

// 4. Getting from the data from db. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var firstTrainTime = childSnapshot.val().firstTrainTime;
  var frequency = childSnapshot.val().frequency;

  // Log Train Info in Console
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);

  
	// Calculate the minutes till arrival, take the current time in unix subtract the FirstTrain time and find the modulus between the difference and the frequency  
	var differenceTimes = moment().diff(moment.unix(firstTrainTime), "minutes");
	var remainder = moment().diff(moment.unix(firstTrainTime), "minutes") % frequency ;
	var minutes = frequency - remainder;

	// To calculate the arrival time, add the tMinutes to the currrent time
	var arrival = moment().add(minutes, "m").format("hh:mm A"); 
	console.log(minutes);
	console.log(arrival);

	console.log(moment().format("hh:mm A"));
	console.log(arrival);
	console.log(moment().format("X"));

	// 5. Displaying on the html page
	$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");

});










