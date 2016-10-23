var date = new Date();//we are creating a date object with initialise date with current date
// we are getting seprate day , date and year
var day = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();
//var hours = date.getHours();

//we are printing the date
console.log((month + 1) + "/" + day + "/" + year );