function sum(a,b,callback) {
	setTimeout(function(){
		callback(null, a+b);
	},2000);
}

function callback(err,a){
	return a;
}
console.log(sum(2,3,callback));