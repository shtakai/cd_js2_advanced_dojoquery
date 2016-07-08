var cheerio = require('cheerio');
//module.export var $Dojoquery = (function(){
module.exports = (function(el){
  var obj,
    el;

  // NOTE: el is only ELEMENT not class etc
  //  -> el: button => this.el = '<button></button>'
  this.el = cheerio.load(`
  <${el}></${el}>
  `);

    this.el.prototype.one = function(){
      console.log('emit 1');
       return 1;
    };

    this.el.prototype.click = function(){

      console.log('emit click');
    };


    this.el.prototype.hover = function(){
      console.log('emit hover');

    };

  return this.el;
});


