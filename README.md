# codemirror-inject

[![Travis Build Status](https://img.shields.io/travis/iceddev/codemirror-inject/master.svg?label=travis&style=flat-square)](https://travis-ci.org/iceddev/codemirror-inject)

Inject CodeMirror into a page including base and theme CSS

## Usage

```js
var codemirror = require('codemirror-inject');

var el = document.getElementById('editor');

// loads the base styling for codemirror and mounts an instance in the given el
var editor = codemirror(el, {
  mode: 'javascript', // will load the `javascript` syntax mode
  theme: 'monokai' // will load the `monokai` theme
});
```

## License

MIT
