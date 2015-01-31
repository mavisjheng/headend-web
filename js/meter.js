$(document).ready(function(){
  $("#meteraction-submit").click(function(){
    alert("Action Type: " + $("#action-type :selected").val() +
    	  "\nMeter ID: " + $("#meteraction-meterid").val() + 
    	  "\nPassword: " + $("#meteraction-pwd").val());
  });

  $("#getcapability-submit").click(function(){
    alert("Capability Type: " + $("#capability-type :selected").val() +
    	  "\nMeter ID: " + $("#getcapability-meterid").val());
  });

  $("#getusage-submit").click(function(){
    alert("Usage Type: " + $("#getusage-type :selected").val() +
    	  "\nMeter ID: " + $("#getusage-meterid").val());
  });

  $("#gethistory-submit").click(function(){
    alert("Data Type: " + $("#data-type :selected").val() +
    	  "\nMeter ID: " + $("#gethistory-meterid").val() + 
    	  "\nItem: " + $("#gethistory-item").val() + 
    	  "\nStart Time: " + $("#gethistory-starttime").val() +
    	  "\nEnd Time: " + $("#gethistory-endtime").val());
  });

  $("#getinstant-submit").click(function(){
    alert("Meter ID: " + $("#getinstant-meterid").val() + 
        "\nItem: " + $("#getinstant-item").val());
  });

  $("#setusage-submit").click(function(){
    alert("Usage Type: " + $("#setusage-type :selected").val() +
        "\nMeter ID: " + $("#setusage-meterid").val() +
        "\nValue: " + $("#setusage-value").val());

  });

  $("#settou-submit").click(function(){
    alert("Meter ID: " + $("#settou-meterid").val() + 
        "\nTou: " + $("#settou-tou").val());
  });

  $("#setregister-submit").click(function(){
    alert("Meter ID: " + $("#setregister-meterid").val() +
        "\nKey: " + $("#setregister-key").val() +
        "\nValue: " + $("#setregister-value").val());
  });

  $("#setpwd-submit").click(function(){
    alert("Meter ID: " + $("#setpwd-meterid").val() + 
        "\nPassword: " + $("#setpwd-pwd").val());
  });

  $("#updateprogram-submit").click(function(){
    alert("Meter ID: " + $("#updateprogram-meterid").val() + 
        "\nURL: " + $("#updateprogram-url").val());
  });

  $("#updatefirmware-submit").click(function(){
    alert("Meter ID: " + $("#updatefirmware-meterid").val() + 
        "\nURL: " + $("#updatefirmware-url").val());
  });

  $("#sendihd-submit").click(function(){
    alert("Meter ID: " + $("#sendihd-meterid").val() + 
        "\nMessage: " + $("#sendihd-message").val());
  });

  $("#contact-submit").click(function(){
    alert("Name: " + $("#contact-name").val() + 
        "\nEmail: " + $("#contact-email").val() +
        "\nMessage: " + $("#contact-message").val());
  });

});

