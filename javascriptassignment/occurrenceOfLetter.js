var string =  process.argv[2];
var letter = process.argv[3];
function occurrence(value,letter) {
	var count = 0;
	for (var i = 0; i < value.length; i++) {
		if(letter == value[i]){
			count += 1;		}
	}
	return count;
}
console.log(occurrence(string,letter));

