var assert = require('assert');
var expect = require('chai').expect;

var $Dojoquery = require('../lib/dojoquery');


describe('dojoquery', function(){
  var array,
      callback;

  before(function(){

  })
  it('test', function(){
    console.log($Dojoquery('test'));
    expect($Dojoquery('test').el).to.be.eql('test');
  });

});
