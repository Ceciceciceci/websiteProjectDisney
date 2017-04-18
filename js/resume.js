
/*******************NAVBAR*******************/
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

//function to click and change the active highlight to another nav element navigation
function changeActiveNav(event){
    var scrollY = $(document).scrollTop();
    $('#nav-bar a').each(function(){
        var currHash = $(this);
        var refElement = $(currHash.attr("href"));
        if (refElement.position().top <= scrollY && refElement.position().top +
            refElement.height() > scrollY){
              $('#nav-bar ul li a').removeClass("active");
              currHash.addClass("active");
            }
            else{
              currHash.removeClass("active");
            }
    });
}
//on scoll change the active nav as well.
$(document).ready(function () {
    $(document).on("scroll", changeActiveNav);

    //smoothscroll
    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
    //
    //     $('a').each(function () {
    //         $(this).removeClass('active');
    //     })
    //     $(this).addClass('active');
    //
    //     // var target = this.hash,
    //     //     menu = target;
    //     // $target = $(target);
    //     // $('html, body').stop().animate({
    //     //     'scrollTop': $target.offset().top+2
    //     // }, 500, 'swing', function () {
    //     //     window.location.hash = target;
    //     //     $(document).on("scroll", changeActiveNav);
    //     // });
    // });
});


/*******************FOR PROJECTS*******************/
//for the tabs; bootstrap plug-in
$(document).ready(function () {
    $('.dived').hide();
    $('.expander').click(function () {
        $(this).parent().next().slideToggle(150);
    });
    $('.dived').slideUp(200);
});
