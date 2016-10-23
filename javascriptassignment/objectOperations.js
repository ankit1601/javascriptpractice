var myObj = [
			{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
			{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
			{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
			{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
			{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
			{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}
			];
function displayProgrammer(myObj1) {
	console.log("These are the Programmer among all");
	for (var i = 0; i < myObj1.length; i++) {
		if(myObj1[i].occupation == "Programmer"){
			console.log(myObj1[i]);
		}
	}
}

displayProgrammer(myObj);

function sortAccAge(a,b){
		if(a.age < b.age) return 1;
		if(a.age > b.age) return -1;
		if(a.age == b.age) return 0;
}
myObj.sort(sortAccAge);
console.log("Here employees are sorted according to age");
for (var i = 0; i < myObj.length; i++) {
	console.log(myObj[i]);
}
