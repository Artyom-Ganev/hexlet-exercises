define([
   'Ex/functions'
], function (
   functions
) {
   'use strict';
   
   describe('Functions/ex1/isPalindrome', function() {
      it('should return true', function () {
          assert.equal(functions.isPalindrome('a'), true);
      });
   });
});
