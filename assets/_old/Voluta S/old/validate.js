$(document).ready(function(){
 
 $('#contactForm').validate(
 {
  rules: {
    name: {
      minlength: 2,
      required: true
    },
    email: {
      required: true,
      email: true
    },
    url: {
      url: true,
	  
    },
    message: {
      minlength: 8,
      required: true
    }
  },
  highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
  },
  success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
  }
 });
}); // end document.ready