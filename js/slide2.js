$(document).ready(function(){

  let slideContainer = $('.mobile_slide'),
      slideWidth = slideContainer.width(),
      slideHeight = slideContainer.height(),
      slideCount = $('.mobile_items li').length,
      slideItemsWidth = slideWidth * slideCount,
      slidePrev = slideContainer.find(".side-btn2 .prev3"),
      slideNext = slideContainer.find(".side-btn2 .next4");


  $('.mobile_item').css({'width': slideWidth, 'height': slideHeight});
  $('.mobile_items').css({'width': slideItemsWidth, 'height': slideHeight});
  $('.mobile_item:last-child').prependTo($('.mobile_items'));
  $('mobile_items').css({'margin-left': -slideWidth});

  function slideLeft(){
    $('.mobile_items').stop().animate({'left':-slideWidth},500,function(){
      $('.mobile_items').css({'left':0});
      $('.mobile_item:first-child').appendTo('.mobile_items');
    });
  };
  
  function slideRight(){
    $('.mobile_items').stop().animate({left: -slideWidth}, 500, function(){
      $('.mobile_items').css({'left': 0});
      $('.mobile_item:last-child').prependTo('.mobile_items');
    });
  }

  slidePrev.click(function(e){
    e.preventDefault();
    slideRight();
  });

  slideNext.click(function(e){
    e.preventDefault();
    slideLeft();
  });

  
});