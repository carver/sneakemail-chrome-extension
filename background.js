
// insert text to active element
function setField(text) {
    chrome.tabs.executeScript(null, 
        {code:"document.activeElement.value = '"+text+"';"});
}

// insert sneakemail address to active page element
function insertAddress(info, tab) {
  $.ajax('http://httpbin.org/get', {
    dataType: "json",
    success : function(data) {
        setField(data.origin);
    },
    error : function() {
        console.log('failed to get ajax response');
        setField('Castle of AAARRRGHHH...');
    },
  });
}

var title = "Sneakemail address here";
var id = chrome.contextMenus.create(
    {"title": title, "contexts":["editable"], "onclick": insertAddress},
    function() {
        if(chrome.extension.lastError) {
            console.log("menu item create error: " + chrome.extension.lastError.message);
        }
    }
    );
