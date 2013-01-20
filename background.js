
// insert sneakemail address to active page element
function insertAddress(info, tab) {
  chrome.tabs.executeScript(null, 
      {code:"document.activeElement.value = '"+info.menuItemId+"';"});
  
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
