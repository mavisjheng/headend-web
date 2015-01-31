$(document).ready(function() {
    $("#dcuaction-submit").click(function() {
        alert("Action Type: " + $("#action-type :selected").val() +
            "\nDcu ID: " + $("#dcuaction-dcuid").val() +
            "\nSession Key Seed: " + $("#session-key").val() +
            "\nMaster Key: " + $("#master-key").val());
    });

    $("#getcapability-submit").click(function() {
        alert("Capability Type: " + $("#capability-type :selected").val() +
            "\nMeter ID: " + $("#getcapability-meterid").val());
    });

    $("#getusage-submit").click(function() {
        alert("Usage Type: " + $("#usage-type :selected").val() +
            "\nMeter ID: " + $("#getusage-meterid").val());
    });

    $("#gethistory-submit").click(function() {
        alert("Data Type: " + $("#data-type :selected").val() +
            "\nDcu ID: " + $("#gethistory-dcuid").val() +
            "\nMeter ID: " + $("#gethistory-meterid").val() +
            "\nItem: " + $("#gethistory-item").val() +
            "\nStart Time: " + $("#gethistory-starttime").val() +
            "\nEnd Time: " + $("#gethistory-endtime").val());
    });

    $("#getlog-submit").click(function() {
        alert("Dcu ID: " + $("#getlog-dcuid").val() +
            "\nStart Time: " + $("#getlog-starttime").val() +
            "\nEnd Time: " + $("#getlog-endtime").val());
    });

    $("#contact-submit").click(function(){
        alert("Name: " + $("#contact-name").val() + 
            "\nEmail: " + $("#contact-email").val() +
            "\nMessage: " + $("#contact-message").val());
    });

});
