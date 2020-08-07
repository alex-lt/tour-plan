$(document).ready(function(){

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
  
  
  //modal 
  
  var modalButton = $("[data-toggle=modal]");
  var modalCloseButton = $(".modal-dialog__close");
  modalButton.on("click", openModal);
  modalCloseButton.on("click", closeModal);
  
  function openModal(){
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.addClass('modal-overlay--visible');
    modalDialog.addClass('modal-dialog--visible');
  }
  
  function closeModal(event){
    event.preventDefault();
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.removeClass('modal-overlay--visible');
    modalDialog.removeClass('modal-dialog--visible');
  }
  
  $(document).keyup(function(event){
    if(event.which=='27'){
        $('.modal-overlay').removeClass('modal-overlay--visible');
        $('.modal-dialog').removeClass('modal-dialog--visible');
    }
  });
 

  //modal-validation

  $(".form").each(function(){
    $(this).validate({
      errorClass: "validate",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least 2 synbols"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Please enter your phone number"
        }
      }
    });
  });

  //phone Mask
  $(document).ready(function(){
    $('.phone-mask').mask('+7 (000) 000-00-00', {placeholder: "+7 (999) 999-99-99"});
  });

});

