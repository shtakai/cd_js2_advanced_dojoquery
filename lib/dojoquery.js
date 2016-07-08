
//module.export var $Dojoquery = (function(){
module.exports = (function(el){
  var obj,
    el;
  this.el = el;

  obj = {
    one: function(){
      return 1;
    },
    el: this.el
  };

  return obj;
});


