var number = process.argv[2];
console.log(number);

var numberToString = new String(number);

function addDashesBetweenEven(value) {
	var result = value[0];
	for (var i= 0; i < value.length-1; i++) {
		var j = i+1;
		if(j==value.length){
			break;
		}
		value1=value.charAt(i);
		value2=value.charAt(j)
		var flag=evenNumber(value1,value2);
		if(flag==true){
			result = result +"-" + value2;
		}
		else{
			result = result + value2;
		}
	}
	return result;
}

function evenNumber(value1,value2) {
	if((((Number.parseInt(value1))%2)==0) && (((Number.parseInt(value2))%2)==0)){
		return true;
	}
	else{
		return false;
	}
}

console.log(addDashesBetweenEven(numberToString));