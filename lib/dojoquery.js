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

    this.el.click = function(callback){
      console.log('emit click');
      console.log(`callback: ${callback}`);
      console.log(this.el);
      return el;
    };


    this.el.hover = function(callback){
      console.log('emit hover');
      console.log(`callback: ${callback}`);
      return callback();

    };

  return this.el;
});


