var assert = require('assert');
var expect = require('chai').expect;
var cheerio = require('cheerio');

var $Dojoquery = require('../lib/dojoquery');


describe('dojoquery', function(){
  var array,
      callback;

  before(function(){

  })

  it('create element with button -> <button></button>', function(){
    //console.log($Dojoquery('button');
   expect($Dojoquery('button').html()).to.match(/<button><\/button>/);
  });

  it('respond to click', function(){
     expect($Dojoquery('button')).to.respondTo('click');
  });

  it('respond to hover', function(){
     expect($Dojoquery('button')).to.respondTo('hover');
  });
});
