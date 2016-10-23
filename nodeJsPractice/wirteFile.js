var fs = require('fs');
fs.writeFile('./test.txt' , "Hello there! i am writing to this file" ,'utf8',function(error){
	if(error) throw error;
	console.log("filewritten");
});