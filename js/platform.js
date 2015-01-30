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

  $('.service-pills a').click(function() {
        var $this = $(this);
        var $bc = $('<li></li>');

        $this.parents('li').each(function(n, li) {
            var $a = $(li).children('a').clone().prepend(' / ');
            $bc.prepend($a);
        });
        $('.breadcrumb').html($bc.prepend('<a href="index.html">Headend / </a><a href="platform.html">Platform Service </a>'));
        
    });

});