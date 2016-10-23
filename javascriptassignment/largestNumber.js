var numbers = new Array(23, 45, 66, 77, 8);
var temp = numbers[0];
console.log(numbers);
/**
 * @param  {[Array]}
 * @return {[Array]}
 */
for (var i = 1; i < numbers.length; i++) {
	if (numbers[i] > temp) {
		temp = numbers[i];
	}
}
console.log("Largest Number is " + temp);