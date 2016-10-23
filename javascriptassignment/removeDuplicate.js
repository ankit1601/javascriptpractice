var arrayDuplicate = new Array(1, 3, 4, 5, 4, 6, 7, 6, 8);//we  have intialise an Array with few duplicate Element
var noDuplicate = new Set(arrayDuplicate); // we have crested set from an array
console.log("Array with duplicate Element: " + arrayDuplicate);
arrayDuplicate = Array.from(noDuplicate);//we have converted back array from set with removed duplicate
console.log("Array Without Duplicate Element: " + arrayDuplicate); // we have printed the results here