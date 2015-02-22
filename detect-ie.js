(function() {

  // A short snippet for detecting versions of IE in JavaScript
  // without resorting to user-agent sniffing
  var ie = (function(){

    var undef,
      v = 3,
      div = document.createElement('div'),
      all = div.getElementsByTagName('i');

    while (
      div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
      all[0]
    );

    return v > 4 ? v : undef;

  }());

  // get ie version
  console.log(ie);

})();
