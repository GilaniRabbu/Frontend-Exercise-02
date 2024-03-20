(function ($) {
  'use strict';
  $('.item').on("click", function () {
    $(this).next().slideToggle(100);
    $('.desc').not($(this).next()).slideUp('fast');
  });
}(jQuery));