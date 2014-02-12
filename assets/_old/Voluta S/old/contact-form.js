		$(document).ready(function () {
			$("button#submit").click(function(){
				$.ajax({
					type: "POST",
					url: "process.php", // 
					data: $('form.form-horizontal').serialize(),
					success: function(msg){
						$("#thanks").html(msg)
					},
					error: function(){
						alert("failure");
					}
				});
			});
		});
