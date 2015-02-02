$(document).ready(function(){
  $("#getalivereport-submit").click(function(){
    alert("Start Time: " + $('input[name="getalivereport-starttime"]').val() +
        "\nEnd Time: " + $('input[name="getalivereport-endtime"]').val());
  });

  $("#updatepwd-submit").click(function(){
    alert("Meter ID: " + $('input[name="updatepwd-meterid"]').val() + 
        "\nPassword: " + $('input[name="updatepwd-pwd"]').val());
  });

  $("#contact-submit").click(function(){
    alert("Name: " + $('input[name="contact-name"]').val() + 
        "\nEmail: " + $('input[name="contact-email"]').val() +
        "\nMessage: " + $('textarea[name="contact-message"]').val());
  });
});