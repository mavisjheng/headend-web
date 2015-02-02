$(document).ready(function(){
  $("#meteraction-submit").click(function(){
    alert("Action Type: " + $('select[name="action-type"]').val() +
    	  "\nMeter ID: " + $('input[name="meteraction-meterid"]').val() + 
    	  "\nPassword: " + $('input[name="meteraction-pwd"]').val());
  });

  $("#getcapability-submit").click(function(){
    alert("Capability Type: " + $('select[name="capability-type"]').val() +
    	  "\nMeter ID: " + $('input[name="getcapability-meterid"]').val());
  });

  $("#getusage-submit").click(function(){
    alert("Usage Type: " + $('select[name="getusage-type"]').val() +
    	  "\nMeter ID: " + $('input[name="getusage-meterid"]').val());
  });

  $("#gethistory-submit").click(function(){
    alert("Data Type: " + $('select[name="data-type"]').val() +
    	  "\nMeter ID: " + $('input[name="gethistory-meterid"]').val() + 
    	  "\nItem: " + $('input[name="gethistory-item"]').val() + 
    	  "\nStart Time: " + $('input[name="gethistory-starttime"]').val() +
    	  "\nEnd Time: " + $('input[name="gethistory-endtime"]').val());
  });

  $("#getinstant-submit").click(function(){
    alert("Meter ID: " + $('input[name="getinstant-meterid"]').val() + 
        "\nItem: " + $('input[name="getinstant-item"]').val());
  });

  $("#setusage-submit").click(function(){
    alert("Usage Type: " + $('select[name="setusage-type"]').val() +
        "\nMeter ID: " + $('input[name="setusage-meterid"]').val() +
        "\nValue: " + $('input[name="setusage-value"]').val());

  });

  $("#settou-submit").click(function(){
    alert("Meter ID: " + $('input[name="settou-meterid"]').val() + 
        "\nTou: " + $('input[name="settou-tou"]').val());
  });

  $("#setregister-submit").click(function(){
    alert("Meter ID: " + $('input[name="setregister-meterid"]').val() +
        "\nKey: " + $('input[name="setregister-key"]').val() +
        "\nValue: " + $('input[name="setregister-value"]').val());
  });

  $("#setpwd-submit").click(function(){
    alert("Meter ID: " + $('input[name="setpwd-meterid"]').val() + 
        "\nPassword: " + $('input[name="setpwd-pwd"]').val());
  });

  $("#updateprogram-submit").click(function(){
    alert("Meter ID: " + $('input[name="updateprogram-meterid"]').val() + 
        "\nURL: " + $('input[name="updateprogram-url"]').val());
  });

  $("#updatefirmware-submit").click(function(){
    alert("Meter ID: " + $('input[name="updatefirmware-meterid"]').val() + 
        "\nURL: " + $('input[name="updatefirmware-url"]').val());
  });

  $("#sendihd-submit").click(function(){
    alert("Meter ID: " + $('input[name="sendihd-meterid"]').val() + 
        "\nMessage: " + $('input[name="sendihd-message"]').val());
  });

  $("#contact-submit").click(function(){
    alert("Name: " + $('input[name="contact-name"]').val() + 
        "\nEmail: " + $('input[name="contact-email"]').val() +
        "\nMessage: " + $('textarea[name="contact-message"]').val());
  });
});

