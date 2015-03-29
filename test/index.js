'use strict';

var expect = require('expect');

var inject = require('../');

function toArray(elementList){
  return Array.prototype.slice.call(elementList, 0);
}

describe('codemirror-inject', function(){

  var div;

  beforeEach(function(done){
    div = document.createElement('div');
    done();
  });

  afterEach(function(done){
    div = null;
    done();
  });

  it('injects a code mirror and styles into the page', function(done){
    inject(div, {
      mode: 'javascript',
      theme: 'monokai'
    });

    var styleEls = toArray(document.querySelectorAll('style'));

    var hasBaseStyling = styleEls.some(function(el){
      return (el.textContent.indexOf('\n.CodeMirror') !== -1);
    });

    var hasMonokai = styleEls.some(function(el){
      return (el.textContent.indexOf('\n.cm-s-monokai.CodeMirror') !== -1);
    });

    var hasCobalt = styleEls.some(function(el){
      return (el.textContent.indexOf('\n.cm-s-cobalt.CodeMirror') !== -1);
    });

    expect(hasBaseStyling).toEqual(true);
    expect(hasMonokai).toEqual(true);
    expect(hasCobalt).toEqual(false);

    done();
  });

  it('adds theme styles if injected into same div with new options', function(done){
    inject(div, {
      mode: 'javascript',
      theme: 'monokai'
    });
    inject(div, {
      mode: 'javascript',
      theme: 'cobalt'
    });

    var styleEls = toArray(document.querySelectorAll('style'));

    var hasBaseStyling = styleEls.some(function(el){
      return (el.textContent.indexOf('\n.CodeMirror') !== -1);
    });

    var hasMonokai = styleEls.some(function(el){
      return (el.textContent.indexOf('\n.cm-s-monokai') !== -1);
    });

    var hasCobalt = styleEls.some(function(el){
      return (el.textContent.indexOf('\n.cm-s-cobalt') !== -1);
    });

    expect(hasBaseStyling).toEqual(true);
    expect(hasMonokai).toEqual(true);
    expect(hasCobalt).toEqual(true);

    done();
  });

  it('adds theme styles if injected into different div', function(done){
    var div2 = document.createElement('div');
    inject(div2, {
      mode: 'javascript',
      theme: 'eclipse'
    });

    var styleEls = toArray(document.querySelectorAll('style'));

    var hasEclipse = styleEls.some(function(el){
      return (el.textContent.indexOf('\n.cm-s-eclipse') !== -1);
    });

    expect(hasEclipse).toEqual(true);

    done();
  });
});
