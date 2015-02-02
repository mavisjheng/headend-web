$(document).ready(function() {
    $("#dcuaction-submit").click(function() {
        alert("Action Type: " + $('select[name="action-type"]').val() +
            "\nDcu ID: " + $('input[name="dcuaction-dcuid"]').val() +
            "\nSession Key Seed: " + $('input[name="session-key"]').val() +
            "\nMaster Key: " + $('input[name="master-key"]').val());
    });

    $("#getcapability-submit").click(function() {
        alert("Capability Type: " + $('select[name="capability-type"]').val() +
            "\nMeter ID: " + $('input[name="getcapability-meterid"]').val());
    });

    $("#getusage-submit").click(function() {
        alert("Usage Type: " + $('select[name="usage-type"]').val() +
            "\nMeter ID: " + $('input[name="getusage-meterid"]').val());
    });

    $("#gethistory-submit").click(function() {
        alert("Data Type: " + $('select[name="data-type"]').val() +
            "\nDcu ID: " + $('input[name="gethistory-dcuid"]').val() +
            "\nMeter ID: " + $('input[name="gethistory-meterid"]').val() +
            "\nItem: " + $('input[name="gethistory-item"]').val() +
            "\nStart Time: " + $('input[name="gethistory-starttime"]').val() +
            "\nEnd Time: " + $('input[name="gethistory-endtime"]').val());
    });

    $("#getlog-submit").click(function() {
        alert("Dcu ID: " + $('input[name="getlog-dcuid"]').val() +
            "\nStart Time: " + $('input[name="getlog-starttime"]').val() +
            "\nEnd Time: " + $('input[name="getlog-endtime"]').val());
    });

    $("#contact-submit").click(function(){
        alert("Name: " + $('input[name="contact-name"]').val() + 
            "\nEmail: " + $('input[name="contact-email"]').val() +
            "\nMessage: " + $('textarea[name="contact-message"]').val());
  });
});
