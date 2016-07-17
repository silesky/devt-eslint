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

function validateScript(content) {
  console.log(content);

};

chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(resource, content) {
  var url = resource.url;
  if (url.lastIndexOf(".js") === url.length - 3) {
    validateScript(content, resource.url);
  }
});

chrome.devtools.panels.create(
    'JS Hint',
    null, // No icon path
    'settings/panel.html',
    null // no callback needed
);
});

