$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
        console.log('unknown ajax error: '+event);
    }
);

// insert text to active element
function setField(text) {
    chrome.tabs.executeScript(null, 
        {code:"document.activeElement.value = '"+text+"';"});
}

// insert sneakemail address to active page element
function insertAddress(info, tab) {
    //login
    $.ajax('https://sneakemail.com/public/auth', {
        type : 'post',
        data : credentials, //specified in auth.js file (see readme)
        success : function(data, textStatus, jqXHR) {
            searchAddress(info.pageUrl)
        },
        error : function() {
            console.log('failed on login call');
            setField('The bugfix is in the Castle of AAARRRGHHH...');
        },
    });
}

function searchAddress(url){
    var domain = url.split('/')[2];
    var domains = domain.split('.');
    domain = domains[domains.length-2]+'.'+domains[domains.length-1];
    $.ajax('https://sneakemail.com/folders/*/name/find_names/'+domain, {
        success : function(data, textStatus, jqXHR) {
            var found = $('#scratchpad').html(data).find('#activate_address');
            if(found.size())
                setField(found.val());
            else
                setField('unavailable'); //TODO: create address
        },
        error : function() {
            console.log('failed on search');
            setField('Maybe the developer is pining for the fjords?');
        },
    });
}

//TODO: add content_script that creates this menu and calls an event into background page on click
//  That allows the background script to be non-persistent and use less memory
var title = "Sneakemail address here";
var id = chrome.contextMenus.create(
    {"title": title, "contexts":["editable"], "onclick": insertAddress},
    function() {
        if(chrome.extension.lastError) {
            console.log("menu item create error: " + chrome.extension.lastError.message);
        }
    }
    );
