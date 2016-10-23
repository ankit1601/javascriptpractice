function callback(arg2,arg3) {
	console.log("check callback");
}
console.log('before');
setTimeout(callback,4000);
console.log('after');