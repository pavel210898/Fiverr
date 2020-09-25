

$(document).ready(function(){


  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });

$('.parallax-window').parallax({imageSrc: 'images/parallaxbg.jpg'}); 


$(function(){
  var navbar = $('.header');
  
  $(window).scroll(function(){
    if($(window).scrollTop() <= 40){
      navbar.removeClass('navbar-scroll');
    } else {
      navbar.addClass('navbar-scroll');
    }
  });
});
$(function(){
  var navbar = $('#logo');
  
  $(window).scroll(function(){
    if($(window).scrollTop() <= 5){
      navbar.removeClass('smallLogo');
    } else {
      navbar.addClass('smallLogo');
    }
  });
});
$("#serviceDiv1").click(function(){
  $("#serviceDiv1 p").addClass("activeBtn");
  $("#serviceDivImg1").attr("src","Images/Blank-Tab-Purple.png");
});
}); 



