$(document).ready(function(){
  $("#getalivereportsubmit").click(function(){
    alert("Start Time: " + $("#starttime").val() +
        "\nEnd Time: " + $("#endtime").val());
  });

  $("#updatepwdsubmit").click(function(){
    alert("Meter ID: " + $("#meterid").val() + 
        "\nPassword: " + $("#pwd").val());
  });

  $("#contactussubmit").click(function(){
    alert("Name: " + $("#contactName").val() + 
        "\nEmail: " + $("#contactEmail").val() +
        "\nMessage: " + $("#contactMessage").val());
  });

});