$(document).ready(function(){
	$("#testAPI").on("click", function(){
		console.log("It's working");
	});

	var test = $.ajax({
		type: "GET",
		// server app takes the request and sends the "hellow world" res.
		url: "http://localhost:3000/api/test"
	});
	test.done(function(data){
		console.log(data);
	});

	test.fail(function(){
		console.log("Oh no!")
	});

});