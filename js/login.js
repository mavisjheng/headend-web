$(document).ready(function(){
  $("#contact-submit").click(function(){
    alert("Name: " + $("#contact-name").val() + 
        "\nEmail: " + $("#contact-email").val() +
        "\nMessage: " + $("#contact-message").val());
  });

});