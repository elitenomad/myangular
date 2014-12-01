function sayHello(){
	return "Hello World!!!";
}

function respondTo(name){
	return _.template("Hello <%= to %>!!!")({to: name});
}