$(document).ready(function(){

	alert("opened");

	$("#submit").click(function(){

		var username = $('#username').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var password = $('#password').val();

		console.log("Username : "+username+"\nemail: "+email+"Phone : "+phone+"\nPassword : "+password);
		console.log("ok");
		$.ajax({
			url : "/response",
			type : "POST",
			// data : {

			// 	username : username,
			// 	email : email,
			// 	phone : phone,
			// 	password : password,
			// },
			data : $('form').serialize(),

			success : function(data)
			{
				console.log("Transfered successfully");

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