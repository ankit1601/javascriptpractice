var myString = "absnlkjal";
console.log("unsortedWord: "+myString);

function sortWord(myString) {
	// body...
var arrayString = myString.split("");
arrayString.sort();
var sortedWord = arrayString.join("").toString();
return sortedWord;
}

console.log("sortedWord: "+ sortWord(myString));