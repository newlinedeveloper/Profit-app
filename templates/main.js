$(document).ready(function(){

	alert("opened");

	$("#submit").click(function(){

		var username = $('#username').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var password = $('#password').val();

		console.log("Username : "+username+"\nemail: "+email+"Phone : "+phone+"\nPassword : "+password);

		$.ajax({
			url : "/entreprenuer",
			type : "POST",
			data : {

				username : username,
				email : email,
				phone : phone,
				password : password,
			},

			success : function(data)
			{
				console.log("Transferred successfully");

				$("#username").val("");
				$("#email").val("");
				$("#phone").val("");
				$("#password").val("");
			},

			error : function(err){

				console.log("err : "+err);
			}

		});

	})
})