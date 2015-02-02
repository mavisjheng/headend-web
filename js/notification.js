$(document).ready(function(){
  $("#register-submit").click(function(){
    alert("User Name: " + $('input[name="register-username"]').val() +
        "\nProtocol: " + $('input[name="register-protocol"]').val() +
        "\nContent Type: " + $('input[name="register-contenttype"]').val()+
        "\nAddress: " + $('input[name="register-address"]').val());
  });

  $("#unregister-submit").click(function(){
    alert("User ID: " + $('input[name="unregister-userid"]').val());
  });

  $("#subscribe-submit").click(function(){
    alert("User ID: " + $('input[name="subscribe-userid"]').val() + 
        "\nNotification Type: " + $('input[name="subscribe-notificationtype"]').val());
  });

  $("#unsubscribe-submit").click(function(){
    alert("User ID: " + $('input[name="unsubscribe-userid"]').val() + 
        "\nNotification Type: " + $('input[name="unsubscribe-notificationtype"]').val());
  });

  $("#contact-submit").click(function(){
    alert("Name: " + $('input[name="contact-name"]').val() + 
        "\nEmail: " + $('input[name="contact-email"]').val() +
        "\nMessage: " + $('textarea[name="contact-message"]').val());
  });
});