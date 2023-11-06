// Get the ISO timestamp from the input message
var iso = msg.payload;

// Create a new date object from the ISO timestamp
var date = new Date(iso);

// Get the hours, minutes, and seconds from the date object
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

// Pad the values with leading zeros if needed
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

// Format the output as hh:mm:ss
var output = hours + ":" + minutes + ":" + seconds;

// Set the output message to the formatted time
msg.payload = output;

// Return the output message
return msg;
