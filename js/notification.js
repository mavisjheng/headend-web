$(document).ready(function(){
  $("#register-submit").click(function(){
    alert("User Name: " + $("#register-username").val() +
        "\nProtocol: " + $("#register-protocol").val() +
        "\nContent Type: " + $("#register-contenttype").val()+
        "\nAddress: " + $("#register-address").val());
  });

  $("#unregister-submit").click(function(){
    alert("User ID: " + $("#unregister-userid").val());
  });

  $("#subscribe-submit").click(function(){
    alert("User ID: " + $("#subscribe-userid").val() + 
        "\nNotification Type: " + $("#subscribe-notificationtype").val());
  });

  $("#unsubscribe-submit").click(function(){
    alert("User ID: " + $("#unsubscribe-userid").val() + 
        "\nNotification Type: " + $("#unsubscribe-notificationtype").val());
  });

  $("#contact-submit").click(function(){
    alert("Name: " + $("#contact-name").val() + 
        "\nEmail: " + $("#contact-email").val() +
        "\nMessage: " + $("#contact-message").val());
  });

});