
$(document).ready(function () {
    $('#save').click(function () {
        var storage = chrome.extension.getBackgroundPage().localStorage;
        storage.username = $('#username').val();
        storage.password = $('#password').val();
        window.close();
    });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-302125-10']);
_gaq.push(['_trackPageview']);
