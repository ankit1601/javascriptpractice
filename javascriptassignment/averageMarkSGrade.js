function studentDetails(name,marks) {
	this.name=name;
	this.marks=marks;
}

var student1= new studentDetails("David",80);
var student2= new studentDetails("Vinoth",77);
var student3= new studentDetails("Divya",88);
var student4= new studentDetails("Ishitha",95);
var student5= new studentDetails("Thomas",68);

var student = [student1,student2,student3,student4,student5];
function averageMarks(student){
	var average = 0;
	for (var i = 0; i < student.length; i++) {
		average += student[i].marks;
	}
	return average/(student.length);
}
var average = averageMarks(student);
console.log("average" + average);

function gradeOfStudent(average){
	console.log(average);
	if(average<60){
		return "F";
	}
	else if(60 <= average < 70){
		return "D";
	}
	else if(70 <= average < 80){
		return "C";
	}
	else if(80 <= average < 90){
		return "B";
	}
	else{
		return "A";
	}
}
console.log(average);
console.log(gradeOfStudent(average));
console.log("gradeOfStudent: " + gradeOfStudent(average));