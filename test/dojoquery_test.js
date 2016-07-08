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


  it('respond to click with one callback', function(){
    var callback = function(){return 'clicked';}
     expect($Dojoquery('button').click(callback)).to.match(/<button><\/button>/);
  });

  it('respond to hover with two callback', function(){
    var callback1 = function(){return 'hover in';}
    var callback2 = function(){return 'hover out';}
     expect($Dojoquery('button').click(callback1, callback2)).to.not.throw(Error);
  });
});
