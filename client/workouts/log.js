$(function(){
	$.extend(WorkoutLog,{
		resultlog: {
			userResultlog: [],

			create:function(){
				var log = {
						result:$("#log-resultsave").val(),
						select:$("#log-workoutselect").val(),
						note:$("#log-notesave").val(),
				};
				var postData = { resultlog: log};
							var define = $.ajax({
					type: "POST",
						url:WorkoutLog.API_BASE + "resultlog",
						data:JSON.stringify(postData),
						contentType: "application/json"
						});

					define.done(function(data){
						WorkoutLog.resultlog.userResultlog.push(data.resultlog);
					});
			},

			fetchAll: function(){
						var fetchLogs = $.ajax({
					type:"GET",
					url: WorkoutLog.API_BASE + "resultlog",
					headers: {
						"authorization":window.localStorage.getItem("sessionToken")
					}		
				})
				.done(function(data){
					WorkoutLog.resultlog.userResultlog = data;
				})
					.fail(function(err){
						console.log(err);
					});
				}
			}
		});	

// bindings 
		$("#log-save2").on("click", WorkoutLog.resultlog.create);

//  fetch difinitions if we already are authenticated and refresh 
		if(window.localStorage.getItem("sessionToken")){
			WorkoutLog.resultlog.fetchAll; //() - took this out
		}

});
