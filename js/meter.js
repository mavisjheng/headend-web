$(document).ready(function(){
  $("#actionsubmit").click(function(){
    alert("Action Type: " + $("#actiontype :selected").val() +
    	  "\nMeter ID: " + $("#meterid1").val() + 
    	  "\nPassword: " + $("#pwd1").val());
  });

  $("#capabilitysubmit").click(function(){
    alert("Capability Type: " + $("#capabilitytype :selected").val() +
    	  "\nMeter ID: " + $("#meterid2").val());
  });

  $("#getusagesubmit").click(function(){
    alert("Usage Type: " + $("#getusagetype :selected").val() +
    	  "\nMeter ID: " + $("#meterid3").val());
  });

  $("#historysubmit").click(function(){
    alert("Data Type: " + $("#datatype :selected").val() +
    	  "\nMeter ID: " + $("#meterid4").val() + 
    	  "\nItem: " + $("#item1").val() + 
    	  "\nStart Time: " + $("#starttime1").val() +
    	  "\nEnd Time: " + $("#endtime1").val());
  });

  $("#instantsubmit").click(function(){
    alert("Meter ID: " + $("#meterid5").val() + 
        "\nItem: " + $("#item2").val());
  });

  $("#setusagesubmit").click(function(){
    alert("Usage Type: " + $("#setusagetype :selected").val() +
        "\nMeter ID: " + $("#meterid6").val() +
        "\nValue: " + $("#value1").val());

  });

  $("#tousubmit").click(function(){
    alert("Meter ID: " + $("#meterid7").val() + 
        "\nTou: " + $("#tou").val());
  });

  $("#setregistersubmit").click(function(){
    alert("Meter ID: " + $("#meterid8").val() +
        "\nKey: " + $("#key").val() +
        "\nValue: " + $("#value2").val());
  });

  $("#setpwdsubmit").click(function(){
    alert("Meter ID: " + $("#meterid9").val() + 
        "\nPassword: " + $("#pwd2").val());
  });

  $("#updateprogramsubmit").click(function(){
    alert("Meter ID: " + $("#meterid10").val() + 
        "\nURI: " + $("#uri1").val());
  });

  $("#updatefirmwaresubmit").click(function(){
    alert("Meter ID: " + $("#meterid11").val() + 
        "\nURI: " + $("#uri2").val());
  });

  $("#sendihdsubmit").click(function(){
    alert("Meter ID: " + $("#meterid12").val() + 
        "\nMessage: " + $("#message").val());
  });

  $("#contactussubmit").click(function(){
    alert("Name: " + $("#contactName").val() + 
        "\nEmail: " + $("#contactEmail").val() +
        "\nMessage: " + $("#contactMessage").val());
  });

  $('.pills a').click(function() {
        var $this = $(this);
        var $bc = $('<li></li>');

        $this.parents('li').each(function(n, li) {
            var $a = $(li).children('a').clone().prepend(' / ');
            $bc.prepend($a);
        });
        $('.breadcrumb').html($bc.prepend('<a href="index.html">Headend / </a><a href="meter.html">Meter Service </a>'));
        
    });
  
});

