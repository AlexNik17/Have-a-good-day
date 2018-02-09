
// Scroll anchor
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(el).offset().top
      }, 1500);
        return false;
        });