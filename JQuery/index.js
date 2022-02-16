$('#accept').click(function() {
	if ($('#submitbtn').is(':disabled')) {
    	$('#submitbtn').removeAttr('disabled');
    } else {
    	$('#submitbtn').attr('disabled', 'disabled');
    }
});
const togglePassword = document.querySelector('#password');
 const password = document.querySelector('#Confirmpassword');

 togglePassword.addEventListener('click', function (e) {
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
   password.setAttribute('type', type);
   this.classList.toggle('fa-eye-slash');
});

      $(document).ready(function(){
          $("button").click(function(){
              var imageUrl = "images/sky.jpg";
              $(".box").css("background-image", "url(" + imageUrl + ")");
          });
          var max_length = 15;
          $('textarea').keyup(function () {
              var len = max_length - $(this).val().length;
              $('.GFG').text(len);
          });
          $( "p:last" ).click(function() {
            $( this ).fadeTo( "slow", 0.40 );
          });
          $( "#btn1" ).click(function() {
  $( "#box" ).animate({
   width: "300px",
   height: "300px",
    }, 1500 );
});

$( "#btn2" ).click(function() {
  $( "#box" ).animate({
   width: "100px",
   height: "100px",
    }, 1500 );
});
      });
