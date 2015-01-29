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

  $('.pills a').click(function() {
        var $this = $(this);
        var $bc = $('<li></li>');

        $this.parents('li').each(function(n, li) {
            var $a = $(li).children('a').clone().prepend(' / ');
            $bc.prepend($a);
        });
        $('.breadcrumb').html($bc.prepend('<a href="index.html">Headend / </a><a href="platform.html">Platform Service </a>'));
        
    });

});