var abc= function (xyz1){ 

	var xyz = function(){
		return xyz1;
	}
	return xyz;
}
var myFunction = abc("ankit");
console.log(myFunction());


var counter = (function(){
 function printValue(i) {
 	console.log("i="+i);
 }
		var i=0;
		return {
			get:function(){
				printValue(i);
			},
			set:function(vol){
				i=vol;
			}
			,
			increment:function(){
				i=i+1;
			}
		}
})();
var counter1 = counter.get;
counter1();
//console.log(counter1());
