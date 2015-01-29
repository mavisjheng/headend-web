$(document).ready(function(){
  $("#registersubmit").click(function(){
    alert("User Name: " + $("#username").val() +
        "\nProtocol: " + $("#protocol").val() +
        "\nContent Type: " + $("#contenttype").val()+
        "\nAddress: " + $("#address").val());
  });

  $("#unregistersubmit").click(function(){
    alert("User ID: " + $("#userid1").val());
  });

  $("#subscribesubmit").click(function(){
    alert("User ID: " + $("#userid2").val() + 
        "\nNotification Type: " + $("#notificationtype1").val());
  });

  $("#unsubscribesubmit").click(function(){
    alert("User ID: " + $("#userid3").val() + 
        "\nNotification Type: " + $("#notificationtype2").val());
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
        $('.breadcrumb').html($bc.prepend('<a href="index.html">Headend / </a><a href="notification.html">Notification Service </a>'));
        
    });

});