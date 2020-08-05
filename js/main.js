var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false
  },

});

$('.parallax-window').parallax({imageSrc: 'img/newsletter.jpg'});

var reviewslSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false
  },

});

var menuButton = document.querySelector(".button-menu");

menuButton.addEventListener("click", function(){
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});

//send form

//form - newsletter
$(document).ready(function(){

  $('#newsletter-form').on('submit',function(){

     var that=$(this),
         url=that.attr('action'),
        type=that.attr('method'),
       data={};

   that.find('[name]').each(function(index,value){

       var that=$(this),
           name=that.attr('name'),
           value=that.val();


       data[name]=value;

   });

   $.ajax({

       url:url,
       type:type,
       data:data,
       success:function(response){

           console.log(response);
           alert(response);
       }


   });

   return false;

});
});

//form - footer
$(document).ready(function(){

  $('#footer-form').on('submit',function(){

     var that=$(this),
         url=that.attr('action'),
        type=that.attr('method'),
       data={};

   that.find('[name]').each(function(index,value){

       var that=$(this),
           name=that.attr('name'),
           value=that.val();


       data[name]=value;

   });

   $.ajax({

       url:url,
       type:type,
       data:data,
       success:function(response){

           console.log(response);
           alert(response);
       }


   });

   return false;

});
});