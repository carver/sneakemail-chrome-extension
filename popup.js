
$(document).ready(function () {
    $('#save').click(function () {
        var storage = chrome.extension.getBackgroundPage().localStorage;
        storage.username = $('#username').val();
        storage.password = $('#password').val();
        window.close();
    });
});
