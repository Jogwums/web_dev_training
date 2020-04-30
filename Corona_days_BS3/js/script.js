$(document).ready(function(){
	$('#myForm').submit(function(event){
		event.preventDefault();
		
		// alert('Form submitted successfully!');
		
		var username = $('#username').val();
		var password = $('#password').val();
		
		//alert('username'+ +'password')
		//this would pop up the username and password e.g in an alert
		
		if(username == 'admin' && password == 'password'){
			$('.alert').remove();
			$('#myForm').before('<div class="alert alert-success">Login Successful. You will be redirected soon<span class="close" data-dismiss="alert"></span></div>');
		}else{
			$('.alert').remove();
			$('#myForm').before('<div class="alert alert-danger">Username or Password Incorrect<span class="close" data-dismiss="alert"></span></div>');
		}
	});
	
}); 