'use strict';

angular.module('firebasepracticeApp')
  .filter('foodFilter', function() {

  return function(input) {
    var result = [];

    angular.forEach(input, function(data) {
      if (data.hasOwnProperty('name') && data.hasOwnProperty('price')) {
        result.push(data);
      }
    });
    return result;
  };
});
