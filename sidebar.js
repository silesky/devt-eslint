document.getElementById('sidebar').innerHTML = "HELLO WORLD";

chrome.extension.onMessage.addListener(function (message, sender) {
     console.log('message recieved');
     document.getElementById('sidebar').innerHTML = "MESSAGE RECIEVED"
    //Send needed information to background page
    
});