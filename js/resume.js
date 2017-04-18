
//fixed navbar
$(document).ready(function() {
  $(window).scroll(function () {
      // console.log($(window).scrollTop());
      if ($(window).scrollTop() > 0) {
        $('#nav_bar').addClass('fixed-navbar');
      }
      //fixes the navbar to stay at the top top,
      //allows section1 shows
      if ($(window).scrollTop() < 1) {
        $('#nav_bar').removeClass('fixed-navbar');
      }
  });
});

//scrollTo div anchor scroll
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          //test if hash id exists
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            //animate and scroll Top method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
        }
    });
});

//chevron
$(document).ready(function(){
    $(".chevron").animate()

});

//projects
//for the tabs; bootstrap plug-in
$(document).ready(function () {
    $('.dived').hide();
    $('.expander').click(function () {
        $(this).parent().next().slideToggle(150);
    });
    $('.dived').slideUp(200);
});
