'use strict';

var editor = require('codemirror');
var addStyles = require('style-loader/addStyles');

function injectCodeMirror(el, options){
  var mode = options.mode;
  var theme = options.theme;

  if(mode){
    require('codemirror/mode/' + mode + '/' + mode + '.js');
  }

  var baseStyles = require('codemirror/lib/codemirror.css');
  addStyles(baseStyles);

  if(theme){
    var themeStyles = require('codemirror/theme/' + theme + '.css');
    addStyles(themeStyles);
  }

  return editor(el, options);
}

module.exports = injectCodeMirror;
