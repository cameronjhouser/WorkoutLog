$(document).ready(function(){
	$.extend(WorkoutLog, {
		// signup open(
		signup:function(){
			// username & password variables
			var username = $("#su_username").val();
			var password = $("#su_password").val();
			// user Object 
			var user = {
				user: {
					username: username, 
					password: password 
				}
			};
	// }
			// signup post 
			var signup = $.ajax({
				type: "POST",
				url: WorkoutLog.API_BASE + "user",
				data: JSON.stringify( user ),
				contentType: "application/json"
			});
			// signup done/file
			signup.done(function(data){
				if(data.sessionToken){
					WorkoutLog.setAuthHeader(data.sessionToken);
				}

				$("#signup-modal").modal("hide");
				$(".disabled").removeClass("disabled");
				$("#loginout").text("Logout");
					}).fail(function(){
				$("#su_error").text("There was an issue with sign up").show();
			});

		}// MAY BE EXTRA
		// login method 

		// loginout method 
	});

	// blind events
	$("#signup").on("click", WorkoutLog.sighup);
});