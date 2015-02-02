$(document).ready(function(){
  $("#contact-submit").click(function(){
    alert("Name: " + $('input[name="contact-name"]').val() + 
        "\nEmail: " + $('input[name="contact-email"]').val() +
        "\nMessage: " + $('textarea[name="contact-message"]').val());
  });
});