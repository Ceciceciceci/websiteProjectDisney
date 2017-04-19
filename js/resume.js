
/*******************NAVBAR*******************/

//FIX NAVBAR TO TOP
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

//SMOOTH SCROLLING
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
                scrollTop: $(hash).offset().top - 40
            }, 1000, function(){
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
        }
    });

    //change the active tag to the clicked nav item
    $(document).on('scroll', changeActiveNav);
    // smoothscroll
    $('a[href^="#"]').on('click', function () {
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
});

//function to click and change the active highlight to another nav element navigation
function changeActiveNav(event){
    var scrollY = $(document).scrollTop();
    $('#nav-bar ul li a').each(function(){
        var currHash = $(this);
        console.log('currHash' + currHash);
        var refElement = $(currHash.attr("href"));
        console.log('refElement' + refElement);
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

/*******************FOR PROJECTS*******************/
//for the tabs; bootstrap plug-in
$(document).ready(function () {
    $('.dived').hide();
    $('.expander').click(function () {
        $(this).parent().next().slideToggle(150);
    });
    $('.dived').slideUp(200);
});


/****************Fade in/out****************/
$('.handle').click(function () {
    var navbar = $('.nav_links');
    if(navbar.hasClass('show')){
        navbar.removeClass('show').addClass('hide');
    }else{
        navbar.removeClass('hide').addClass('show');
    }
});
// $(window).resize(function(){
//    var winwidth = $(window).innerWidth();
//    if(winwidth > 768){
//        $('.nav').removeClass('show').removeClass('hide');
//    }
// });
