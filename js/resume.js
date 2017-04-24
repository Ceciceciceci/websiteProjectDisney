
/*******************NAVBAR*******************/

//FIX NAVBAR TO TOP
$(document).ready(function() {
  $(window).scroll(function () {
      // console.log($(window).scrollTop());
      var pageScroll = $(this).scrollTop();
      if ($(window).scrollTop() > 0) {
          $('#nav_bar').addClass('fixed-navbar');
          $('.handle').addClass('fixed-navbar_min');
      }
      //fixes the navbar to stay at the top top,
      //allows section1 shows
      if ($(window).scrollTop() < 1) {
          $('#nav_bar').removeClass('fixed-navbar');
      }
  });
});


/****************Pop out navbar****************/
$(document).ready(function() {
      if( $('.handle').css('display') == ('block')) {
          $('.handle').on('click',function () {
              console.log("clicking!!!");
              $('.nav_links').toggleClass('show');
          });
      }
});


$(window).scroll(function () {
    // console.log($(window).scrollTop());
    var pageScroll = $(this).scrollTop();
    //fade in some sections of the website
    if (pageScroll > $('.section3').offset().top-($(window).height()/2)){
        setTimeout(function(){
             $('.section3 .work-panel').addClass('fading-in');
          }, 400)
    }
});

$(window).scroll(function () {
    // console.log($(window).scrollTop());
    var pageScroll = $(this).scrollTop();
    //fade in some sections of the website
    if (pageScroll > $('.section6').offset().top-($(window).height()/2)){
      setTimeout(function(){
           $('.section6 .icon-panel').addClass('fading-in');
        }, 400)
    }
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
