var unsortedArray = new Array(5, 3, 2, 99, 7);
console.log("unsortedArray: " + unsortedArray); 
var sortNumber = function (a,b) {
	if((a-b)>0) return 1;
	if((a-b)<0) return -1;
	if(a==b) return 0;
}
var sortedArray=unsortedArray.sort(sortNumber);
console.log("sortedArray: " + sortedArray);