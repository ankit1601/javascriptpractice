var fs = require('fs');
var manupulated;
// var openFile =  fs.openFile("./test.txt");
var file = fs.readFile('./FoodFacts.csv', 'utf8', function(err, data) {
	if (err) throw err;
	manupulated = data.toString().split("\n");
	fs.writeFile('./cadana1.csv', manupulated[0]);
	//var regex = /,(?=([^\"]*\"[^\"]*\")*[^\"]*$)|,/;
	var regex2 = /,(?=(?:[^"]|"[^"]*")*$)/;
	var header = manupulated[0].split(",");
	console.log("Header array Length:"+header.length);
	//var firstrow = manupulated[20].split(regex2);
	console.log("firstrow length: " + firstrow.length);

	console.log(header);
	console.log(firstrow[31]);
	var headerIndex = header.indexOf("countries",0);
	var saltIndex= header.indexOf("salt_100g",0);
	var sugarIndex=header.indexOf("sugars_100g",0);
	console.log(headerIndex);
	console.log(sugarIndex);
	console.log(saltIndex);

	var countries = ["Netherlands","Canada","United Kingdom","Australia","France","Germany","Spain","South Africa"];
	var netherlandsData =[];
	var canadaData=[];
	var ukData=[];
	var australiaData=[];
	var franceData=[];
	var germanyData=[];
	var spainData=[];
	var southAfricaData=[];
	var discardedData=0;
	for(var i=1;i<manupulated.length-1;i++){
		var data = manupulated[i].split(regex2);
		//console.log(data[headerIndex] + i);
		var filteredData = filterData(headerIndex,countries,data);
		switch(filteredData){
			case "Netherlands":netherlandsData.push(data);
							   break;
			case "Canada":     canadaData.push(data);
							   break;
			case "United Kingdom":ukData.push(data);
						       break;
			case "Australia":  australiaData.push(data);
							   break;
			case "France":     franceData.push(data);
							   break;
			case "Germany":    germanyData.push(data);
							   break;
			case "Spain":      spainData.push(data);
							   break;
			case "South Africa":southAfricaData.push(data);
							   break
			default:           discardedData+=1;
							   break;
		}
	}
	console.log("Netherlands: "+netherlandsData.length);
	console.log("Canada: " + canadaData.length);
	console.log("United Kingdom: " + ukData.length);
	console.log("Australia: " + australiaData.length);
	console.log("France : " + franceData.length);
	console.log("Germany: " + germanyData.length);
	console.log("Spain: " + spainData.length);
	console.log("SouthAfrica: " + southAfricaData.length);
	console.log("discardedData: "+discardedData);
	console.log(headerIndex);
	console.log(sugarIndex);
	console.log(saltIndex);
	var saltSugar=[];
	var firstJSON="";
	var countriesIndex=0;
	var dataArray = [netherlandsData,canadaData,ukData,australiaData,franceData,germanyData,spainData,southAfricaData]
	for (var i = 0; i < dataArray.length; i++) {
		saltSugar=itemCount(saltIndex,sugarIndex,dataArray[i]);
		countriesIndex =i;
		firstJSON=createJSON(header,headerIndex,countries,countriesIndex,saltSugar,firstJSON);
	}

	console.log("saltSugar: "+saltSugar);
	console.log("firstJSON:" + firstJSON);
});
function createJSON(header,headerIndex,countries,countriesIndex,saltSugarData,firstJSON){
	if(firstJSON == ""){
		firstJSON = firstJSON + "{" + header[headerIndex] + ":" +
									"[" +
										"{"+
											"country:" + countries[countriesIndex] + "," +
											"salt:" + saltSugarData[0] + "," + 
											"sugar:" + saltSugarData[1] + "}";
	}
	else{
		firstJSON = firstJSON + "," + 
									"{"+
											"country:" + countries[countriesIndex] + "," +
											"salt:" + saltSugarData[0] + "," + 
											"sugar:" + saltSugarData[1] + "}";
	}
	if(countriesIndex==countries.length-1){
		firstJSON = firstJSON + "]" +
								"}";
	}
	return firstJSON;
}
function itemCount(saltIndex,sugarIndex,data){ 
	var salt = 0.0,sugar=0.0;
	var result =[];
	for (var i = 0; i < data.length-1; i++) {
		if(data[i][saltIndex] != ""){
			salt += Number.parseFloat(data[i][saltIndex]);

		}
		if(data[i][sugarIndex] != ""){
			sugar += Number.parseFloat(data[i][sugarIndex]);
		}
	}
	result.push(salt);
	result.push(sugar);
	return result;
}
function filterData(headerIndex,countries,data) {
	for (var i = 0; i < countries.length; i++) {
		if(data[headerIndex].search(/,+/) != -1){
			return "No Matched Data";
		}
		if(data[headerIndex] == countries[i]){
			return countries[i];
		}
	}
	return "No Data Found";
	//console.log("This function is called")
}
