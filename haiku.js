var fs = require("fs");

function createHaiku(structure){
	console.log("this should log a haiku with the structure " + structure);
	
  var dataInObj = formatData(cmudictFile);
	// console.log(findRanWord(5, dataInObj));
	var output = "";

	for (var i = 0; i < structure.length; i++) {
		output += findRanWord(structure[i], dataInObj) + "\n";
	}
	console.log(output);
}

module.exports = {
	createHaiku: createHaiku,
};

var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
	var lines = data.toString().split("\n");
  var lineSplit =[];
  var dataArr = [];
  var dataObj = [];

  lines.forEach(function(line){    
  	
  	lineSplit = line.split("  "); 
  	lineSplit.push(phoneme(lineSplit));
  	dataArr.push(lineSplit);
   	// console.log(dataArr);
   	//[[ 'AALSETH', 'AA1 L S EH0 TH', 2 ],[..]..]
  });
	
	dataObj = arrToObj(dataArr);	
	
	// console.log(dataObj);
	return dataObj;
	// ZYCHER: 2,
 //  ZYDECO: 3,
 //  ZYGMUNT: 2,
}
function phoneme(arr){
	if(arr[1] !== undefined){
  		return arr[1].replace(/[^0-9]/g,"").length;
  	}
}

function arrToObj(arr){
		var dataObj = arr.reduce(function(memo, curr) {
    memo[curr[0]] = curr[2];
    return memo;
}, {});
	return dataObj;
}

function findRanWord(num, obj){
	var boxArr = [];
	for(var prop in obj){
		if(obj[prop] === num){
			boxArr.push(prop);
		}
	}
	return boxArr[Math.floor(Math.random() * boxArr.length)];
		
}



















