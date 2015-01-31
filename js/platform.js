$(document).ready(function(){
  $("#getalivereport-submit").click(function(){
    alert("Start Time: " + $("#getalivereport-starttime").val() +
        "\nEnd Time: " + $("#getalivereport-endtime").val());
  });

  $("#updatepwd-submit").click(function(){
    alert("Meter ID: " + $("#updatepwd-meterid").val() + 
        "\nPassword: " + $("#updatepwd-pwd").val());
  });

  $("#contact-submit").click(function(){
    alert("Name: " + $("#contact-name").val() + 
        "\nEmail: " + $("#contact-email").val() +
        "\nMessage: " + $("#contact-message").val());
  });

});