var array = [,,,,,];
console.log(array.length);
 
var string = "abc,,,,,,cdf";

var array1=string.split(",");

console.log(array1.length);


var test = "Hello,how,are,\"you,why\",,,where,in,bangalore";
console.log(test);
var regex = /,(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
// var regex1=/,(?=())/;
// var array2 = test.split();
console.log(array2);
for(var i=0;i<array2.length;i++)
{
	if (array2[i]==["*"]) 
	{
		var x=array2[i]+array2[i+1]
		console.log(x);
	}


}
