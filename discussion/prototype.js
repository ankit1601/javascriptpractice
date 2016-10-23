var x = function(i){
	this.i = i;
}

Object.prototype.getValue = function(){
	return "this is object prototype";
}
// x.prototype.getValue = function(){
// 	return this.i;
// } 

var temp = new x(2);
console.log(x.getValue());
console.log(temp.getValue());