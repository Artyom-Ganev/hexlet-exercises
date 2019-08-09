define([
   'Ex/functions'
], function (
   functions
) {
   'use strict';

   describe('Functions/ex1/isPalindrome', function () {
      it('should return true', function () {
         assert.isTrue(functions.isPalindrome());
         assert.isTrue(functions.isPalindrome('a'));
         assert.isTrue(functions.isPalindrome('abba'));
      });

      it('should return false', function () {
         assert.isFalse(functions.isPalindrome('ab'));
         assert.isFalse(functions.isPalindrome('abc'));
      });
   });
});
