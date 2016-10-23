var obj = {num:2};
var obj2={num:3};
var addThis = function(a){
		return this.num+a;
}
console.log(addThis.call(obj,2));

var addThisAgain = function(a,b){
return this.num+a+b;
}
console.log(addThisAgain.call(obj,2,3));

var arr =[4,5];
console.log(addThisAgain.apply(obj,arr));

console.log(addThisAgain.bind(obj2.arr));

var bound = addThisAgain.bind(obj);
var bound2 = addThisAgain.bind(obj2);

console.dir(bound);
console.log(bound2);

console.log(bound());