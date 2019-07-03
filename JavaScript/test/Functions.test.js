define([
   'Ex/functions'
], function (
   functions
) {
   'use strict';

   describe('Functions/ex1/isPalindrome', function () {
      it('should return true', function () {
         assert.equal(functions.isPalindrome(), true);
         assert.equal(functions.isPalindrome('a'), true);
         assert.equal(functions.isPalindrome('abba'), true);
      });

      it('should return false', function () {
         assert.equal(functions.isPalindrome('ab'), false);
         assert.equal(functions.isPalindrome('abc'), false);
      });
   });
});
