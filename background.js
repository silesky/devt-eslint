// this can recieve messages from devtools.js and relay them to sidebar.js
chrome.extension.onMessage.addListener(
 function(request, sender, sendResponse) {
 if (request.greeting == "hello") sendResponse({farewell: JSON.stringify(sender)});
});
