$(function(){
    $('.banner_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<i class="fas fa-arrow-left bn_prev"></i>',
        nextArrow:'<i class="fas fa-arrow-right bn_next"></i>',
      });

      // ============= service part start
      $('.service_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:true,
        prevArrow:'<i class="fas fa-angle-up prev"></i>',
        nextArrow:'<i class="fas fa-angle-down next"></i>',
        centerMode:true,
        centerPadding:"0",
        
      });


      // $('.service_slider').slick({
      //   dots: true,
      //   infinite: true,
      //   speed: 300,
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      //   vertical: true,
        
      // });


//========= test part start ==========

      $('.img_slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:true,
        prevArrow:'<i class="fas fa-angle-up prev"></i>',
        nextArrow:'<i class="fas fa-angle-down next"></i>',
        centerMode:true,
        centerPadding:"0",
        asNavFor: '.test_slide'
      });

      
      $('.test_slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        asNavFor: '.img_slide'
      });

  //counter part 
  $('.count_up').counterUp({
    delay: 5,
    time: 3000
});




});