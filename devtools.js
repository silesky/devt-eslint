require(['eslint'], function (eslint) {
    // foo is now loaded.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

var verify = debounce(function() {
        var content = editor.getModel().getText();
        // this is what's up
        var results = eslint.verify(content, OPTIONS);
        console.log(results);
    }, 500);


function getOptions() {
  var options = {}, option, key;
  for (key in localStorage) {
    if (key.indexOf("settings-") === 0) {
      option = JSON.parse(localStorage[key]);
      options[option.key] = option.value;
    }
  }
  return options;
}



// function validateScript(content, url) {
//   var isValid = JSHINT(content, getOptions());
//   if (!isValid) {
//     JSHINT.errors.forEach(function(error) {
//       if (error === null) {
//         // Why does JSHINT return a null terminated array?
//         return;
//       }
//       chrome.experimental.devtools.console.addMessage(chrome.experimental.devtools.console.Severity.Error, error.reason, url, error.line);
//     });
//   } else {
//     chrome.experimental.devtools.console.addMessage(chrome.experimental.devtools.console.Severity.Log, "JSHint: No errors", url);
//   }
// }


var config = {
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-catch-shadow": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-confusing-arrow": 2,
    "no-console": 2,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-continue": 2,
    "no-control-regex": 2,
    "no-debugger": 2
};


/* */
function validate(content) {
  var obj = eslint.verify(content, config); //make this object.reas

     chrome.experimental.devtools.console.addMessage(chrome.experimental.devtools.console.Severity.Error, obj.reason, url, error.line);

}
// api.verify = function(textOrSourceCode, config, filenameOrOptions, saveState) {


chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(resource, content) {
  var url = resource.url;
  if (url.lastIndexOf(".js") === url.length - 3) {
    console.log(content);
    validate(content);
  }
});

chrome.devtools.panels.create(
    'JS Hint',
    null, // No icon path
    'settings/panel.html',
    null // no callback needed
);
});

