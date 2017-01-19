'use strict';

function noop () {
  var line = Array.prototype.slice.call(arguments).join(' ');
  console.log(line);
}

module.exports = function () {
  return noop;
};
