$(window).scroll(function(){
    $('.scroll-nav').toggleClass('scrolled', $(this).scrollTop() > 750);
});

//remove "nav" div when 
