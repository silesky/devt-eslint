 /* globals chrome       */
const config = { 
    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": false,
        "blockBindings": true,
        "classes": true,   
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": false,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": false,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": false,
        "regexUFlag": false,
        "regexYFlag": false,
        "restParams": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodePointEscapes": true,
        "globalReturn": false,
        "jsx": true
    },
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "espree",
    "rules": {
        /*Possible Errors */
        "comma-dangle": [1, "always-multiline"],
        "no-cond-assign": [1, "except-parens"],
        "no-console": 0,
        "no-constant-condition": 1,
        "no-control-regex": 1,
        "no-debugger": 1,
        "no-dupe-args": 1,
        "no-dupe-keys": 1,
        "no-duplicate-case": 0,
        "no-empty-character-class": 1,
        "no-empty": 1,
        "no-ex-assign": 1,
        "no-extra-boolean-cast": 1,
        "no-extra-parens": 0,
        "no-extra-semi": 1,
        "no-func-assign": 1,
        "no-inner-declarations": [1, "functions"],
        "no-invalid-regexp": 1,
        "no-irregular-whitespace": 1,
        "no-negated-in-lhs": 1,
        "no-obj-calls": 1,
        "no-regex-spaces": 1,
        "no-reserved-keys": 0,
        "no-sparse-arrays": 1,
        "no-unexpected-multiline": 1,
        "no-unreachable": 1,
        "use-isnan": 1,
        "valid-jsdoc": 1,
        "valid-typeof": 1,
        /* Best Practices */
        "accessor-pairs": 0,
        "block-scoped-var": 0, // see Babel section
        "complexity": 0,
        "consistent-return": 1,
        "curly": [1, "all"],
        "default-case": 0,
        "dot-notation": [1, {
            "allowKeywords": true,
            "allowPattern": ""
        }],
        "dot-location": [1, "property"],
        "eqeqeq": 1,
        "guard-for-in": 0,
        "no-alert": 1,
        "no-caller": 1,
        "no-div-regex": 1,
        "no-else-return": 1,
        "no-empty-label": 1,
        "no-eq-null": 0,
        "no-eval": 1,
        "no-extend-native": 1,
        "no-extra-bind": 1,
        "no-fallthrough": 0,
        "no-floating-decimal": 1,
        "no-implied-eval": 1,
        "no-iterator": 1,
        "no-labels": 1,
        "no-lone-blocks": 1,
        "no-loop-func": 1,
        "no-multi-spaces": 1,
        "no-multi-str": 1,
        "no-native-reassign": 1,
        "no-new-func": 1,
        "no-new-wrappers": 1,
        "no-new": 1,
        "no-octal-escape": 1,
        "no-octal": 1,
        "no-param-reassign": 0,
        "no-process-env": 0,
        "no-proto": 1,
        "no-redeclare": 1,
        "no-return-assign": 1,
        "no-script-url": 1,
        "no-self-compare": 1,
        "no-sequences": 1,
        "no-throw-literal": 1,
        "no-unused-expressions": 0,
        "no-void": 0,
        "no-warning-comments": [1, {
            "terms": ["todo", "tofix"],
            "location": "start"
        }],
        "no-with": 1,
        "radix": 1,
        "vars-on-top": 1,
        "wrap-iife": [1, "inside"],
        "yoda": [1, "never"],
        /* Strict Mode */
        "strict": [1, "never"],
        /* Variables */
        "no-catch-shadow": 0,
        "no-delete-var": 1,
        "no-label-var": 1,
        "no-shadow-restricted-names": 1,
        "no-shadow": 1,
        "no-undef-init": 1,
        "no-undef": 1,
        "no-undefined": 1,
        "no-unused-vars": [1, {
            "vars": "local",
            "args": "after-used"
        }],
        "no-use-before-define": 1,
        /* Node.js */
        "handle-callback-err": 1,
        "no-mixed-requires": 1,
        "no-new-require": 1,
        "no-path-concat": 1,
        "no-process-exit": 1,
        "no-restricted-modules": [1, ""], // add any unwanted Node.js core modules
        "no-sync": 1,
        /* Stylistic Issues */
        "array-bracket-spacing": [1, "never"],
        "brace-style": [1, "stroustrup", {
            "allowSingleLine": true
        }],
        "camelcase": [1, {
            "properties": "always"
        }],
        "comma-spacing": [1, {
            "before": false,
            "after": true
        }],
        "comma-style": [1, "last"],
        "computed-property-spacing": 0,
        "consistent-this": 0,
        "eol-last": 1,
        "func-names": 1,
        "func-style": 0,
        "indent": [1, 2],
        "key-spacing": [1, {
            "beforeColon": false,
            "afterColon": true
        }],
        "linebreak-style": 0,
        "max-nested-callbacks": [0, 3],
        "new-cap": 0, // see Babel section
        "new-parens": 1,
        "newline-after-var": 0,
        "no-array-constructor": 1,
        "no-continue": 1,
        "no-inline-comments": 0,
        "no-lonely-if": 1,
        "no-mixed-spaces-and-tabs": 1,
        "no-multiple-empty-lines": [1, {
            "max": 1
        }],
        "no-nested-ternary": 0,
        "no-new-object": 1,
        "no-spaced-func": 1,
        "no-ternary": 0,
        "no-trailing-spaces": 1,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": 1,
        "object-curly-spacing": 0, // see Babel section
        "one-var": [1, "never"],
        "operator-assignment": [1, "never"],
        "padded-blocks": [0, "never"],
        "quote-props": [0, "as-needed"],
        "quotes": [1, "single"],
        "semi-spacing": [1, {
            "before": false,
            "after": true
        }],
        "semi": [1, "always"],
        "sort-vars": 0,
        "space-after-keywords": 0,
        "space-before-blocks": [1, "always"],
        "space-before-function-paren": [1, "never"],
        "space-in-parens": [1, "never"],
        "space-infix-ops": 1,
        "space-return-throw-case": 1,
        "space-unary-ops": 0,
        "spaced-comment": [1, "always"],
        "wrap-regex": 1,
        /* ECMAScript 6 */
        "constructor-super": 1,
        "generator-star-spacing": 0, // see Babel section
        "no-this-before-super": 1,
        "no-var": 1,
        "object-shorthand": 0, // see Babel section
        "prefer-const": 1,
        /* Legacy */
        "max-depth": [0, 3],
        "max-len": [1, 121, 2],
        "max-params": 0,
        "max-statements": 0,
        "no-bitwise": 1,
        "no-plusplus": 1,
        /* Babel */
        // "babel/block-scoped-var": 1,
        "babel/object-shorthand": [1, "always"],
        // "babel/generator-star": 1, // deprecated
        "babel/generator-star-spacing": [1, "after"],
        "babel/new-cap": 1,
        "babel/object-curly-spacing": [1, "always"],
        // "babel/space-in-brackets": 1, // deprecated
        /* React */
        "react/display-name": 1,
        "react/jsx-boolean-value": 1,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-undef": 1,
        "react/jsx-quotes": [1, "single"],
        "react/jsx-sort-prop-types": 1,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-multi-comp": 1,
        "react/no-unknown-property": 1,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 1,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 0
    }
}
const getJSON = (filepath) => {
    let JSONObj;
    let xhr = new XMLHttpRequest();
    // async   = true
    xhr.open('GET', filepath, true);
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            JSONObj = JSON.parse(xhr.responseText);
        } else if (xhr.status === 200) {
            console.error(xhr.statusText);
            JSONObj = 'null';
        }
    };
    xhr.send(null);
    return JSONObj;
};


require(['eslint'], (eslint) => {
    const InspectedWindow = chrome.devtools.inspectedWindow;
    const SourcesPanel = chrome.devtools.panels.sources;
// array of objects to object of objects
    var formatArray = (arr) => {
        var newObj = {};
        arr.forEach((el, ind, arr) => {
          var eachName = "line_" + (el.line).toString();
          newObj[eachName] = el;
          delete newObj[eachName]['line'];
          delete newObj[eachName]['severity'];
          delete newObj[eachName]['nodeType'];
        })
        return newObj;
    }
    // checks the content and also displays it
    const validate = (content) => {
        let errorObj;
        let hasContent = !!content || !!content.length;
        console.log(hasContent, 'should be true. content variable should have content');
        if (hasContent) {
            errorObj = eslint.verify(content, config);
        }
        return errorObj;
        
    };

    const displayErrors = (errorObj, url) => {
        console.log(errorObj);
        const filename = url.split('/').pop();
        // obj should get passed to sidebar.html 
        SourcesPanel.createSidebarPane(`ESLint: ${filename}`,  
            (sidebar) => { 
                sidebar.setPage("sidebar.html");
                sidebar.setHeight("8ex");
                sidebar.setObject(formatArray(errorObj));
            } 

        );
        
        console.log(`url! is: ${url}!`);
    
        };

    // event listener for lint stuf fbelow
    const lintEvent = (resource, content) => {
        let url = resource.url;
        if (url.lastIndexOf('.js') === url.length - 3) {
            let errorObj = validate(content);
            displayErrors(errorObj, url);
        }
    };
    // fires if user saves or if new file is added
    InspectedWindow.onResourceContentCommitted.addListener(lintEvent);
    InspectedWindow.onResourceAdded.addListener(lintEvent);
    
    chrome.devtools.panels.create('ESLint', null, // No icon path
        'settings/panel.html', null // no callback needed
    );
});