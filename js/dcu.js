$(document).ready(function(){
  $("#actionsubmit").click(function(){
    alert("Action Type: " + $("#actiontype :selected").val() +
    	  "\nDcu ID: " + $("#dcuid1").val() + 
    	  "\nSession Key Seed: " + $("#sessionkey").val() + 
    	  "\nMaster Key: " + $("#masterkey").val());
  });

  $("#capabilitysubmit").click(function(){
    alert("Capability Type: " + $("#capabilitytype :selected").val() +
    	  "\nMeter ID: " + $("#meterid1").val());
  });

  $("#usagesubmit").click(function(){
    alert("Usage Type: " + $("#usagetype :selected").val() +
    	  "\nMeter ID: " + $("#meterid2").val());
  });

  $("#historysubmit").click(function(){
    alert("Data Type: " + $("#datatype :selected").val() +
    	  "\nDcu ID: " + $("#dcuid2").val() +
    	  "\nMeter ID: " + $("#meterid3").val() + 
    	  "\nItem: " + $("#item").val() + 
    	  "\nStart Time: " + $("#starttime1").val() +
    	  "\nEnd Time: " + $("#endtime1").val());
  });

  $("#logsubmit").click(function(){
    alert("Dcu ID: " + $("#dcuid3").val() + 
    	  "\nStart Time: " + $("#starttime2").val() +
    	  "\nEnd Time: " + $("#endtime2").val());
  });

  $("#contactussubmit").click(function(){
    alert("Name: " + $("#contactName").val() + 
        "\nEmail: " + $("#contactEmail").val() +
        "\nMessage: " + $("#contactMessage").val());
  });
  
});