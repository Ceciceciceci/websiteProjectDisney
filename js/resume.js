
//
$(function(){
  //code
});

//fixed navbar
$(document).ready(function() {
  $(window).scroll(function () {
      console.log($(window).scrollTop())
      //greater than 0 pixels fix it to the top
      if ($(window).scrollTop() > 0) {
        $('#nav_bar').addClass('fixed-navbar');
      }
      //fixes the navbar to stay at the top top, so title stays
      if ($(window).scrollTop() < 1) {
        $('#nav_bar').removeClass('fixed-navbar');
      }
  });
});
