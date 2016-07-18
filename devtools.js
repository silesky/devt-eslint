

 const getJSON = (filepath) => {
    let JSONObj;
    let xhr = new XMLHttpRequest();
    // async = true
    xhr.open('GET', filepath, true);
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        JSONObj = JSON.parse(xhr.responseText);
      } 
      else if (xhr.status === 200) {
        console.error(xhr.statusText);
        JSONObj = 'null';
      }
    };
    xhr.send(null);
    return JSONObj;
 };




require(['eslint'], function(eslint) {

    // foo is now loaded. //
/* function debounce(func, wait, immediate) {
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
}*/
/*
var verify = debounce(function() {
        var content = editor.getModel().getText();
        // this is what's up
        var results = eslint.verify(content);
        console.log(results);
    }, 500);
*/
/*
function getOptions() {
  var optio ns = {}, option, key;
  for (key in localStorage) {
    if (key.indexOf("settings-") === 0) {
      option = JSON.parse(localStorage[key]);
      options[option.key] = option.value;
    }
  }
  return options;
}
*/


/* function validateScript(content, url) {
  var isValid = JSHINT(conten t, getOptions());
  if (!isValid) { 
    JSHINT.errors.forEach(function(error) {
      if (error === null) {
        //  hy does JSHINT return a null terminated array?
        return;
      }
      chrome.experimental.devtools.consol e.addMe ssage(chr ome.experimental.devtools.console.Severity.Error, error.reason, url, error.line);
       
  } else {
    chrome.experimental. devtools.console.addMes sage(chr ome.experimental.dev tools.console.Severity.Log, "JSHint: No errors", url);
 /  /    }
}
*/
    


function validate(content, config, url) {
  let hasContent = !!content || !!content.length;
  console.log(hasContent, 'should be true. content variable should have content');
  const errorObj = eslint.verify(content, config);
  console.log(errorObj); 
//  chrome.experimenal.devtoo ls.consol e.addMessage(chrome.expe rimental.devtools.console.  Severity.Error, obj.reason, url, objline);

}
// api.verify   = function(te     x t OrSourceCode, config, filenameOrOptions, saveState) {


chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(resource, content) {
  const url = resource.url;
  if (url.lastIndexOf('.js') === url.length - 3) {
      const config = getJSON('eslintconfig.json');
      validate(content, config, url);
  }
});

chrome.devtools.panels.create(
    'JS Hint',
    null, // No icon path
    'settings/panel.html',
    null // no callback needed
);
});

